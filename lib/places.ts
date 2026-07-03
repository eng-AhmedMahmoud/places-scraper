const SEARCH_URL = "https://places.googleapis.com/v1/places:searchText";

const FIELD_MASK = [
  "places.id",
  "places.displayName",
  "places.formattedAddress",
  "places.location",
  "places.rating",
  "places.userRatingCount",
  "places.nationalPhoneNumber",
  "places.internationalPhoneNumber",
  "places.websiteUri",
  "places.regularOpeningHours",
  "nextPageToken",
].join(",");

export interface PlaceRow {
  name: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  lat: number | null;
  lng: number | null;
  rating: number | null;
  totalRatings: number | null;
  governorate: string;
  center: string;
  placeId: string;
}

interface NewPlace {
  id: string;
  displayName?: { text?: string };
  formattedAddress?: string;
  location?: { latitude?: number; longitude?: number };
  rating?: number;
  userRatingCount?: number;
  nationalPhoneNumber?: string;
  internationalPhoneNumber?: string;
  websiteUri?: string;
  regularOpeningHours?: { weekdayDescriptions?: string[] };
}

interface SearchResponse {
  places?: NewPlace[];
  nextPageToken?: string;
  error?: { code?: number; message?: string; status?: string };
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function searchText(
  query: string,
  apiKey: string,
  language: "ar" | "en",
  pageToken?: string,
  signal?: AbortSignal,
): Promise<SearchResponse> {
  const body: Record<string, unknown> = { textQuery: query, languageCode: language, pageSize: 20 };
  if (pageToken) body.pageToken = pageToken;
  const res = await fetch(SEARCH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": FIELD_MASK,
    },
    body: JSON.stringify(body),
    signal,
    cache: "no-store",
  });
  return res.json();
}

export interface ScrapeTarget {
  governorate: string;
  center: string;
  query: string;
}

export type ScrapeEvent =
  | { type: "progress"; done: number; total: number; center: string; governorate: string; calls: number }
  | { type: "row"; row: PlaceRow }
  | { type: "warning"; message: string }
  | { type: "capped"; calls: number; cap: number }
  | { type: "done"; total: number; calls: number };

function toRow(p: NewPlace, governorate: string, center: string): PlaceRow {
  return {
    name: p.displayName?.text ?? "",
    address: p.formattedAddress ?? "",
    phone: p.nationalPhoneNumber ?? p.internationalPhoneNumber ?? "",
    website: p.websiteUri ?? "",
    hours: p.regularOpeningHours?.weekdayDescriptions?.join(" | ") ?? "",
    lat: p.location?.latitude ?? null,
    lng: p.location?.longitude ?? null,
    rating: p.rating ?? null,
    totalRatings: p.userRatingCount ?? null,
    governorate,
    center,
    placeId: p.id,
  };
}

export async function* scrapeStream(
  targets: ScrapeTarget[],
  apiKey: string,
  language: "ar" | "en",
  signal: AbortSignal,
  callCap = Number(process.env.MAX_API_CALLS ?? 8000),
): AsyncGenerator<ScrapeEvent> {
  const seen = new Set<string>();
  let scanned = 0;
  let calls = 0;
  let capped = false;

  outer: for (const t of targets) {
    if (signal.aborted) return;
    yield {
      type: "progress",
      done: scanned,
      total: targets.length,
      center: t.center,
      governorate: t.governorate,
      calls,
    };

    let token: string | undefined;
    let pages = 0;
    while (pages < 3) {
      if (signal.aborted) return;
      if (calls >= callCap) {
        yield { type: "capped", calls, cap: callCap };
        capped = true;
        break outer;
      }
      calls += 1;
      const res = await searchText(t.query, apiKey, language, token, signal);
      if (res.error) {
        yield {
          type: "warning",
          message: `${t.center}: ${res.error.status ?? res.error.code ?? ""} ${res.error.message ?? ""}`,
        };
        break;
      }
      for (const p of res.places ?? []) {
        if (signal.aborted) return;
        if (!p.id || seen.has(p.id)) continue;
        seen.add(p.id);
        yield { type: "row", row: toRow(p, t.governorate, t.center) };
      }
      token = res.nextPageToken;
      pages += 1;
      if (!token) break;
      await sleep(2100);
    }
    scanned += 1;
  }
  if (!capped) yield { type: "done", total: seen.size, calls };
}
