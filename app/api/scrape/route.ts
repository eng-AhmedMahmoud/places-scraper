import { NextRequest } from "next/server";
import { EGYPT_GOVERNORATES, centerListForKey } from "@/lib/egypt-data";
import { scrapeStream, type ScrapeTarget } from "@/lib/places";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

interface Body {
  industry: string;
  governorateKeys: string[];
  language: "ar" | "en";
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "GOOGLE_MAPS_API_KEY not set" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const body = (await req.json()) as Body;
  const { industry, governorateKeys, language } = body;
  if (!industry?.trim() || !governorateKeys?.length) {
    return new Response(JSON.stringify({ error: "industry and governorateKeys required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const targets: ScrapeTarget[] = [];
  for (const key of governorateKeys) {
    const g = EGYPT_GOVERNORATES[key];
    if (!g) continue;
    const centers = centerListForKey(key, language);
    const govLabel = language === "ar" ? g.ar : key;
    for (const center of centers) {
      const query =
        language === "ar" ? `${industry} في ${center}` : `${industry} in ${center}, Egypt`;
      targets.push({ governorate: govLabel, center, query });
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
