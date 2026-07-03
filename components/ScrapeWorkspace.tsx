"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import type { PlaceRow } from "@/lib/places";

interface GovOpt {
  key: string;
  label: string;
  centerCount: number;
}

interface Props {
  locale: "en" | "ar";
  governorates: GovOpt[];
}

type SseEvent =
  | { type: "progress"; done: number; total: number; center: string; governorate: string; calls: number }
  | { type: "row"; row: PlaceRow }
  | { type: "warning"; message: string }
  | { type: "capped"; calls: number; cap: number }
  | { type: "done"; total: number; calls: number };

export function ScrapeWorkspace({ locale, governorates }: Props) {
  const t = useTranslations();
  const [industry, setIndustry] = useState("");
  const [selectedGovs, setSelectedGovs] = useState<string[]>(governorates.map((g) => g.key));
  const [searchLang, setSearchLang] = useState<"ar" | "en">(locale);
  const [rows, setRows] = useState<PlaceRow[]>([]);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [progress, setProgress] = useState<{ done: number; total: number; center: string; gov: string; calls: number } | null>(
    null,
  );
  const [capped, setCapped] = useState<{ calls: number; cap: number } | null>(null);
  const [running, setRunning] = useState(false);
  const [filter, setFilter] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  const totalCenters = useMemo(
    () => governorates.filter((g) => selectedGovs.includes(g.key)).reduce((n, g) => n + g.centerCount, 0),
    [governorates, selectedGovs],
  );
  const estCalls = useMemo(() => totalCenters * 3, [totalCenters]);

  const toggleGov = (key: string) => {
    setSelectedGovs((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  const startScrape = useCallback(async () => {
    if (!industry.trim() || selectedGovs.length === 0) return;
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
        body: JSON.stringify({ industry, governorateKeys: selectedGovs, language: searchLang }),
        signal: ctrl.signal,
      });
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
              setProgress({ done: evt.done, total: evt.total, center: evt.center, gov: evt.governorate, calls: evt.calls });
            else if (evt.type === "warning") setWarnings((w) => [...w, evt.message]);
            else if (evt.type === "capped") setCapped({ calls: evt.calls, cap: evt.cap });
            else if (evt.type === "done") setProgress((p) => (p ? { ...p, done: p.total, calls: evt.calls } : p));
          } catch {}
        }
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") setWarnings((w) => [...w, (e as Error).message]);
    } finally {
      setRunning(false);
      abortRef.current = null;
    }
  }, [industry, selectedGovs, searchLang]);

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
        r.governorate.toLowerCase().includes(f) ||
        r.center.toLowerCase().includes(f),
    );
  }, [rows, filter]);

  return (
    <div className="space-y-6">
      <div className="surface p-6">
        <label className="block text-sm mb-2 text-ink-200">{t("form.industry")}</label>
        <input
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          placeholder={t("form.industryPh")}
          className="w-full bg-ink-900/60 border border-ink-700 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-accent-500"
          disabled={running}
        />

        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-ink-200">{t("form.governorates")}</label>
            <div className="flex gap-2 text-xs">
              <button
                onClick={() => setSelectedGovs(governorates.map((g) => g.key))}
                className="chip hover:brightness-125"
                disabled={running}
              >
                {t("form.selectAll")}
              </button>
              <button
                onClick={() => setSelectedGovs([])}
                className="chip hover:brightness-125"
                disabled={running}
              >
                {t("form.clearAll")}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {governorates.map((g) => {
              const on = selectedGovs.includes(g.key);
              return (
                <button
                  key={g.key}
                  onClick={() => toggleGov(g.key)}
                  disabled={running}
                  className={`text-start px-3 py-2 rounded-lg border text-sm transition ${
                    on
                      ? "bg-accent-500/15 border-accent-500/60 text-white"
                      : "border-ink-700 text-ink-300 hover:border-ink-500"
                  }`}
                >
                  <div className="font-medium truncate">{g.label}</div>
                  <div className="text-[10px] opacity-70">
                    {g.centerCount} {t("progress.centers")}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row md:items-end gap-4 justify-between">
          <div>
            <label className="block text-sm mb-2 text-ink-200">{t("form.language")}</label>
            <div className="flex gap-2">
              <button
                onClick={() => setSearchLang("ar")}
                className={`px-3 py-2 rounded-lg text-sm border ${
                  searchLang === "ar"
                    ? "bg-accent-500/15 border-accent-500/60 text-white"
                    : "border-ink-700 text-ink-300"
                }`}
                disabled={running}
              >
                {t("form.langAr")}
              </button>
              <button
                onClick={() => setSearchLang("en")}
                className={`px-3 py-2 rounded-lg text-sm border ${
                  searchLang === "en"
                    ? "bg-accent-500/15 border-accent-500/60 text-white"
                    : "border-ink-700 text-ink-300"
                }`}
                disabled={running}
              >
                {t("form.langEn")}
              </button>
            </div>
          </div>

          <div className="text-xs text-ink-400 md:text-end">
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
                disabled={!industry.trim() || selectedGovs.length === 0}
                className="px-6 py-3 rounded-lg bg-accent-500 hover:bg-accent-400 text-ink-900 font-semibold disabled:opacity-40"
              >
                {t("form.start")}
              </button>
            ) : (
              <button
                onClick={cancel}
                className="px-6 py-3 rounded-lg bg-red-500/80 hover:bg-red-500 text-white font-semibold"
              >
                {t("form.cancel")}
              </button>
            )}
          </div>
        </div>

        {estCalls > 500 && (
          <p className="mt-4 text-xs text-amber-300/80">{t("form.warn")}</p>
        )}
      </div>

      {(running || progress || warnings.length > 0) && (
        <div className="surface p-6">
          <h3 className="font-semibold mb-3">{t("progress.title")}</h3>
          {progress ? (
            <div>
              <div className="flex justify-between text-sm text-ink-300 mb-2">
                <span>
                  {t("progress.scanning")}: <b className="text-white">{progress.center}</b> — {progress.gov}
                </span>
                <span>
                  {progress.done} {t("progress.of")} {progress.total} {t("progress.centers")}
                </span>
              </div>
              <div className="h-2 bg-ink-800 rounded overflow-hidden">
                <div
                  className="h-full bg-accent-500 transition-all"
                  style={{ width: `${(progress.done / Math.max(progress.total, 1)) * 100}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-ink-400">
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
            <p className="text-sm text-ink-400">{t("progress.waiting")}</p>
          )}

          {warnings.length > 0 && (
            <details className="mt-4 text-xs text-amber-200/80">
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

      <div className="surface p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="font-semibold text-lg">
              {t("table.title")} ({rows.length})
            </h3>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder={t("table.filter")}
              className="flex-1 md:w-64 bg-ink-900/60 border border-ink-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent-500"
            />
            <button
              onClick={downloadExcel}
              disabled={rows.length === 0}
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-ink-900 font-semibold text-sm disabled:opacity-40"
            >
              {t("table.download")}
            </button>
          </div>
        </div>

        {filteredRows.length === 0 ? (
          <p className="text-sm text-ink-400 py-8 text-center">{t("table.empty")}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-start text-ink-400 border-b border-ink-700">
                  <th className="py-2 pe-3 text-start">{t("table.name")}</th>
                  <th className="py-2 pe-3 text-start">{t("table.address")}</th>
                  <th className="py-2 pe-3 text-start">{t("table.phone")}</th>
                  <th className="py-2 pe-3 text-start">{t("table.website")}</th>
                  <th className="py-2 pe-3 text-start">{t("table.rating")}</th>
                  <th className="py-2 pe-3 text-start">{t("table.governorate")}</th>
                  <th className="py-2 pe-3 text-start">{t("table.center")}</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((r) => (
                  <tr key={r.placeId} className="border-b border-ink-800/60 hover:bg-ink-800/40">
                    <td className="py-2 pe-3 font-medium text-white">{r.name}</td>
                    <td className="py-2 pe-3 text-ink-300 max-w-xs truncate" title={r.address}>
                      {r.address}
                    </td>
                    <td className="py-2 pe-3 whitespace-nowrap">
                      {r.phone ? (
                        <a href={`tel:${r.phone}`} className="text-accent-400 hover:underline">
                          {r.phone}
                        </a>
                      ) : (
                        <span className="text-ink-500">—</span>
                      )}
                    </td>
                    <td className="py-2 pe-3">
                      {r.website ? (
                        <a
                          href={r.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-400 hover:underline"
                        >
                          ↗
                        </a>
                      ) : (
                        <span className="text-ink-500">—</span>
                      )}
                    </td>
                    <td className="py-2 pe-3">
                      {r.rating != null ? (
                        <span>
                          {r.rating.toFixed(1)} <span className="text-ink-500">({r.totalRatings ?? 0})</span>
                        </span>
                      ) : (
                        <span className="text-ink-500">—</span>
                      )}
                    </td>
                    <td className="py-2 pe-3 text-ink-300">{r.governorate}</td>
                    <td className="py-2 pe-3 text-ink-300">{r.center}</td>
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
