import { NextRequest } from "next/server";
import { stackServerApp } from "@/stack";
import { MENA_COUNTRIES, centerListForDivision, divisionLabel } from "@/lib/mena-data";
import { scrapeStream, type ScrapeTarget } from "@/lib/places";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

interface Body {
  industry: string;
  countryKey: string;
  divisionKeys: string[];
  language: "ar" | "en";
}

export async function POST(req: NextRequest) {
  const user = await stackServerApp.getUser({ tokenStore: req });
  if (!user) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "GOOGLE_MAPS_API_KEY not set" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const body = (await req.json()) as Body;
  const { industry, countryKey, divisionKeys, language } = body;
  if (!industry?.trim() || !countryKey || !divisionKeys?.length) {
    return new Response(
      JSON.stringify({ error: "industry, countryKey and divisionKeys required" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const country = MENA_COUNTRIES[countryKey];
  if (!country) {
    return new Response(JSON.stringify({ error: "unknown country" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const countryLabel = language === "ar" ? country.countryInAr : country.countryInEn;
  const inWord = language === "ar" ? "في" : "in";

  const targets: ScrapeTarget[] = [];
  for (const key of divisionKeys) {
    const d = country.divisions[key];
    if (!d) continue;
    const centers = centerListForDivision(countryKey, key, language);
    const divLabel = divisionLabel(countryKey, key, language);
    for (const center of centers) {
      const query =
        language === "ar"
          ? `${industry} ${inWord} ${center}`
          : `${industry} ${inWord} ${center}, ${countryLabel}`;
      targets.push({ country: countryLabel, governorate: divLabel, center, query });
    }
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const send = (obj: unknown) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(obj)}\n\n`));
      };
      try {
        for await (const evt of scrapeStream(targets, apiKey, language, req.signal)) {
          send(evt);
        }
      } catch (e) {
        send({ type: "warning", message: (e as Error).message });
      } finally {
        controller.close();
      }
    },
    cancel() {},
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
