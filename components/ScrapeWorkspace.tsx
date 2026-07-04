"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import type { PlaceRow } from "@/lib/places";

interface DivisionOpt {
  key: string;
  label: string;
  centerCount: number;
}

export interface CountryOpt {
  key: string;
  label: string;
  labelAr: string;
  labelEn: string;
  divisions: DivisionOpt[];
  totalCenters: number;
}

interface Props {
  locale: "en" | "ar";
  countries: CountryOpt[];
}

type SseEvent =
  | { type: "progress"; done: number; total: number; center: string; governorate: string; country: string; calls: number }
  | { type: "row"; row: PlaceRow }
  | { type: "warning"; message: string }
  | { type: "capped"; calls: number; cap: number }
  | { type: "done"; total: number; calls: number };

export function ScrapeWorkspace({ locale, countries }: Props) {
  const t = useTranslations();
  const [industry, setIndustry] = useState("");
  const [countryKey, setCountryKey] = useState<string>(countries[0]?.key ?? "");
  const activeCountry = useMemo(
    () => countries.find((c) => c.key === countryKey) ?? countries[0],
    [countries, countryKey],
  );
  const [selectedDivs, setSelectedDivs] = useState<string[]>(
    () => activeCountry?.divisions.map((d) => d.key) ?? [],
  );
  const [searchLang, setSearchLang] = useState<"ar" | "en">(locale);
  const [rows, setRows] = useState<PlaceRow[]>([]);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [progress, setProgress] = useState<{
    done: number;
    total: number;
    center: string;
    gov: string;
    country: string;
    calls: number;
  } | null>(null);
  const [capped, setCapped] = useState<{ calls: number; cap: number } | null>(null);
  const [running, setRunning] = useState(false);
  const [filter, setFilter] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  const switchCountry = (key: string) => {
    setCountryKey(key);
    const c = countries.find((x) => x.key === key);
    setSelectedDivs(c ? c.divisions.map((d) => d.key) : []);
  };

  const totalCenters = useMemo(
    () =>
      (activeCountry?.divisions ?? [])
        .filter((d) => selectedDivs.includes(d.key))
        .reduce((n, d) => n + d.centerCount, 0),
    [activeCountry, selectedDivs],
  );
  const estCalls = useMemo(() => totalCenters * 3, [totalCenters]);

  const toggleDiv = (key: string) => {
    setSelectedDivs((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  const startScrape = useCallback(async () => {
    if (!industry.trim() || !countryKey || selectedDivs.length === 0) return;
    setRows([]);
    setWarnings([]);
    setProgress(null);
    setCapped(null);
    setRunning(true);

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const res = await fetch("/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          industry,
          countryKey,
          divisionKeys: selectedDivs,
          language: searchLang,
        }),
        signal: ctrl.signal,
      });
      if (res.status === 401) {
        setWarnings((w) => [...w, t("errors.unauthorized")]);
        setRunning(false);
        return;
      }
      if (!res.ok || !res.body) throw new Error("Bad response");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const parts = buf.split("\n\n");
        buf = parts.pop() ?? "";
        for (const chunk of parts) {
          const line = chunk.split("\n").find((l) => l.startsWith("data: "));
          if (!line) continue;
          try {
            const evt = JSON.parse(line.slice(6)) as SseEvent;
            if (evt.type === "row") setRows((r) => [...r, evt.row]);
            else if (evt.type === "progress")
              setProgress({
                done: evt.done,
                total: evt.total,
                center: evt.center,
                gov: evt.governorate,
                country: evt.country,
                calls: evt.calls,
              });
            else if (evt.type === "warning") setWarnings((w) => [...w, evt.message]);
            else if (evt.type === "capped") setCapped({ calls: evt.calls, cap: evt.cap });
            else if (evt.type === "done")
              setProgress((p) => (p ? { ...p, done: p.total, calls: evt.calls } : p));
          } catch {}
        }
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") setWarnings((w) => [...w, (e as Error).message]);
    } finally {
      setRunning(false);
      abortRef.current = null;
    }
  }, [industry, countryKey, selectedDivs, searchLang, t]);

  const cancel = () => {
    abortRef.current?.abort();
  };

  const downloadExcel = async () => {
    const res = await fetch("/api/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rows, locale }),
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${industry || "results"}-${Date.now()}.xlsx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredRows = useMemo(() => {
    if (!filter.trim()) return rows;
    const f = filter.toLowerCase();
    return rows.filter(
      (r) =>
        r.name.toLowerCase().includes(f) ||
        r.address.toLowerCase().includes(f) ||
        r.phone.toLowerCase().includes(f) ||
        r.country.toLowerCase().includes(f) ||
        r.governorate.toLowerCase().includes(f) ||
        r.center.toLowerCase().includes(f),
    );
  }, [rows, filter]);

  return (
    <div className="space-y-6">
      <div className="surface p-7">
        <label className="block text-xs uppercase tracking-wider mb-3 text-text-muted">
          {t("form.industry")}
        </label>
        <input
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          placeholder={t("form.industryPh")}
          className="field text-lg"
          disabled={running}
        />

        <div className="mt-8">
          <label className="block text-xs uppercase tracking-wider mb-3 text-text-muted">
            {t("form.country")}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {countries.map((c) => {
              const on = c.key === countryKey;
              return (
                <button
                  key={c.key}
                  onClick={() => switchCountry(c.key)}
                  disabled={running}
                  className={`pick ${on ? "pick--on" : ""}`}
                >
                  <div className="font-medium truncate">{c.label}</div>
                  <div className="text-[10px] opacity-70 mt-1">
                    {c.divisions.length} {t("progress.divisions")} · {c.totalCenters}{" "}
                    {t("progress.centers")}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs uppercase tracking-wider text-text-muted">
              {t("form.divisions")}
            </label>
            <div className="flex gap-2 text-xs">
              <button
                onClick={() => setSelectedDivs(activeCountry?.divisions.map((d) => d.key) ?? [])}
                className="chip hover:brightness-125"
                disabled={running}
              >
                {t("form.selectAll")}
              </button>
              <button
                onClick={() => setSelectedDivs([])}
                className="chip hover:brightness-125"
                disabled={running}
              >
                {t("form.clearAll")}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {(activeCountry?.divisions ?? []).map((d) => {
              const on = selectedDivs.includes(d.key);
              return (
                <button
                  key={d.key}
                  onClick={() => toggleDiv(d.key)}
                  disabled={running}
                  className={`pick ${on ? "pick--on" : ""}`}
                >
                  <div className="font-medium truncate">{d.label}</div>
                  <div className="text-[10px] opacity-70 mt-1">
                    {d.centerCount} {t("progress.centers")}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-end gap-6 justify-between">
          <div>
            <label className="block text-xs uppercase tracking-wider mb-3 text-text-muted">
              {t("form.language")}
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setSearchLang("ar")}
                className={`pick ${searchLang === "ar" ? "pick--on" : ""}`}
                disabled={running}
              >
                {t("form.langAr")}
              </button>
              <button
                onClick={() => setSearchLang("en")}
                className={`pick ${searchLang === "en" ? "pick--on" : ""}`}
                disabled={running}
              >
                {t("form.langEn")}
              </button>
            </div>
          </div>

          <div className="text-xs text-text-muted md:text-end">
            <div>
              {totalCenters} {t("progress.centers")}
            </div>
            <div>
              {t("form.estimate")}: ~{estCalls.toLocaleString()}
            </div>
          </div>

          <div className="flex gap-2">
            {!running ? (
              <button
                onClick={startScrape}
                disabled={!industry.trim() || selectedDivs.length === 0}
                className="btn btn--primary btn--lg"
              >
                {t("form.start")}
                <span className="btn__arrow" aria-hidden="true">→</span>
              </button>
            ) : (
              <button onClick={cancel} className="btn btn--danger btn--lg">
                {t("form.cancel")}
              </button>
            )}
          </div>
        </div>

        {estCalls > 500 && (
          <p className="mt-5 text-xs text-amber-300/80">{t("form.warn")}</p>
        )}
      </div>

      {(running || progress || warnings.length > 0) && (
        <div className="surface p-7">
          <h3 className="font-display font-semibold text-lg mb-4">{t("progress.title")}</h3>
          {progress ? (
            <div>
              <div className="flex justify-between text-sm text-text-soft mb-3">
                <span>
                  {t("progress.scanning")}: <b className="text-text">{progress.center}</b> —{" "}
                  {progress.gov}, {progress.country}
                </span>
                <span>
                  {progress.done} {t("progress.of")} {progress.total} {t("progress.centers")}
                </span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${(progress.done / Math.max(progress.total, 1)) * 100}%`,
                  }}
                />
              </div>
              <div className="mt-3 flex justify-between text-xs text-text-muted">
                <span>
                  {rows.length} {t("progress.found")}
                </span>
                <span>
                  {progress.calls} {t("progress.calls")}
                </span>
              </div>
              {capped && (
                <p className="mt-3 text-xs text-amber-300">
                  {t("progress.capped")} — {capped.calls}/{capped.cap}
                </p>
              )}
            </div>
          ) : (
            <p className="text-sm text-text-muted">{t("progress.waiting")}</p>
          )}

          {warnings.length > 0 && (
            <details className="mt-5 text-xs text-amber-200/80">
              <summary className="cursor-pointer">
                {t("progress.warnings")} ({warnings.length})
              </summary>
              <ul className="mt-2 space-y-1 list-disc ps-5">
                {warnings.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </details>
          )}
        </div>
      )}

      <div className="surface p-7">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
          <div>
            <h3 className="font-display font-semibold text-lg text-text">
              {t("table.title")} <span className="text-text-muted">({rows.length})</span>
            </h3>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder={t("table.filter")}
              className="field flex-1 md:w-64 text-sm py-2"
            />
            <button
              onClick={downloadExcel}
              disabled={rows.length === 0}
              className="btn btn--primary btn--sm"
            >
              {t("table.download")}
              <span className="btn__arrow" aria-hidden="true">↓</span>
            </button>
          </div>
        </div>

        {filteredRows.length === 0 ? (
          <p className="text-sm text-text-muted py-10 text-center">{t("table.empty")}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>{t("table.name")}</th>
                  <th>{t("table.address")}</th>
                  <th>{t("table.phone")}</th>
                  <th>{t("table.website")}</th>
                  <th>{t("table.rating")}</th>
                  <th>{t("table.country")}</th>
                  <th>{t("table.governorate")}</th>
                  <th>{t("table.center")}</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((r) => (
                  <tr key={r.placeId}>
                    <td className="font-medium text-text">{r.name}</td>
                    <td className="max-w-xs truncate" title={r.address}>
                      {r.address}
                    </td>
                    <td className="whitespace-nowrap">
                      {r.phone ? (
                        <a href={`tel:${r.phone}`} className="text-accent hover:underline">
                          {r.phone}
                        </a>
                      ) : (
                        <span className="text-text-muted">—</span>
                      )}
                    </td>
                    <td>
                      {r.website ? (
                        <a
                          href={r.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          ↗
                        </a>
                      ) : (
                        <span className="text-text-muted">—</span>
                      )}
                    </td>
                    <td>
                      {r.rating != null ? (
                        <span>
                          {r.rating.toFixed(1)}{" "}
                          <span className="text-text-muted">({r.totalRatings ?? 0})</span>
                        </span>
                      ) : (
                        <span className="text-text-muted">—</span>
                      )}
                    </td>
                    <td>{r.country}</td>
                    <td>{r.governorate}</td>
                    <td>{r.center}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
