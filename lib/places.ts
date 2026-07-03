const TEXT_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
const DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json";

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

interface TextSearchResult {
  place_id: string;
  name?: string;
  formatted_address?: string;
  geometry?: { location?: { lat: number; lng: number } };
  rating?: number;
  user_ratings_total?: number;
}

interface TextSearchResponse {
  results?: TextSearchResult[];
  next_page_token?: string;
  status?: string;
  error_message?: string;
}

interface DetailsResponse {
  result?: {
    name?: string;
    formatted_address?: string;
    formatted_phone_number?: string;
    website?: string;
    opening_hours?: { weekday_text?: string[] };
    geometry?: { location?: { lat: number; lng: number } };
    rating?: number;
    user_ratings_total?: number;
  };
  status?: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function textSearch(
  query: string,
  apiKey: string,
  pageToken?: string,
  language = "ar",
  signal?: AbortSignal,
): Promise<TextSearchResponse> {
  const params = new URLSearchParams({ query, key: apiKey, language });
  if (pageToken) params.set("pagetoken", pageToken);
  const res = await fetch(`${TEXT_URL}?${params}`, { signal, cache: "no-store" });
  return res.json();
}

export async function placeDetails(
  placeId: string,
  apiKey: string,
  language = "ar",
  signal?: AbortSignal,
): Promise<DetailsResponse> {
  const params = new URLSearchParams({
    place_id: placeId,
    fields:
      "name,formatted_address,formatted_phone_number,website,opening_hours,geometry,rating,user_ratings_total",
    key: apiKey,
    language,
  });
  const res = await fetch(`${DETAILS_URL}?${params}`, { signal, cache: "no-store" });
  return res.json();
}

export interface ScrapeTarget {
  governorate: string;
  center: string;
  query: string;
}

export async function* scrapeStream(
  targets: ScrapeTarget[],
  apiKey: string,
  language: "ar" | "en",
  signal: AbortSignal,
): AsyncGenerator<
  | { type: "progress"; done: number; total: number; center: string; governorate: string }
  | { type: "row"; row: PlaceRow }
  | { type: "warning"; message: string }
  | { type: "done"; total: number }
> {
  const seen = new Set<string>();
  let scanned = 0;

  for (const t of targets) {
    if (signal.aborted) return;
    yield { type: "progress", done: scanned, total: targets.length, center: t.center, governorate: t.governorate };

    let token: string | undefined;
    let pages = 0;
    while (pages < 3) {
      if (signal.aborted) return;
      const res = await textSearch(t.query, apiKey, token, language, signal);
      if (res.status && res.status !== "OK" && res.status !== "ZERO_RESULTS") {
        yield { type: "warning", message: `${t.center}: ${res.status} ${res.error_message ?? ""}` };
        break;
      }
      for (const p of res.results ?? []) {
        if (signal.aborted) return;
        if (!p.place_id || seen.has(p.place_id)) continue;
        seen.add(p.place_id);
        const d = await placeDetails(p.place_id, apiKey, language, signal);
        const r = d.result ?? {};
        yield {
          type: "row",
          row: {
            name: r.name ?? p.name ?? "",
            address: r.formatted_address ?? p.formatted_address ?? "",
            phone: r.formatted_phone_number ?? "",
            website: r.website ?? "",
            hours: r.opening_hours?.weekday_text?.join(" | ") ?? "",
            lat: r.geometry?.location?.lat ?? p.geometry?.location?.lat ?? null,
            lng: r.geometry?.location?.lng ?? p.geometry?.location?.lng ?? null,
            rating: r.rating ?? p.rating ?? null,
            totalRatings: r.user_ratings_total ?? p.user_ratings_total ?? null,
            governorate: t.governorate,
            center: t.center,
            placeId: p.place_id,
          },
        };
        await sleep(120);
      }
      token = res.next_page_token;
      pages += 1;
      if (!token) break;
      await sleep(2100);
    }
    scanned += 1;
  }
  yield { type: "done", total: seen.size };
}
