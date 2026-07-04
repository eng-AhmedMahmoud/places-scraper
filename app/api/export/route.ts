import { NextRequest } from "next/server";
import * as XLSX from "xlsx";
import type { PlaceRow } from "@/lib/places";

export const runtime = "nodejs";

interface Body {
  rows: PlaceRow[];
  locale: "en" | "ar";
}

const HEADERS_AR: Record<keyof PlaceRow, string> = {
  name: "الاسم",
  address: "العنوان",
  phone: "الهاتف",
  website: "الموقع الإلكتروني",
  hours: "ساعات العمل",
  lat: "خط العرض",
  lng: "خط الطول",
  rating: "التقييم",
  totalRatings: "عدد المراجعات",
  country: "الدولة",
  governorate: "المحافظة",
  center: "المركز",
  placeId: "معرف Google",
};

const HEADERS_EN: Record<keyof PlaceRow, string> = {
  name: "Name",
  address: "Address",
  phone: "Phone",
  website: "Website",
  hours: "Working hours",
  lat: "Latitude",
  lng: "Longitude",
  rating: "Rating",
  totalRatings: "Reviews",
  country: "Country",
  governorate: "Governorate / Region",
  center: "Center / City",
  placeId: "Google place ID",
};

export async function POST(req: NextRequest) {
  const { rows, locale } = (await req.json()) as Body;
  const headers = locale === "ar" ? HEADERS_AR : HEADERS_EN;

  const byGroup = new Map<string, PlaceRow[]>();
  for (const r of rows) {
    const key = `${r.country} - ${r.governorate}`;
    const arr = byGroup.get(key) ?? [];
    arr.push(r);
    byGroup.set(key, arr);
  }

  const wb = XLSX.utils.book_new();

  const allData = rows.map((r) => {
    const o: Record<string, string | number | null> = {};
    (Object.keys(headers) as (keyof PlaceRow)[]).forEach((k) => {
      o[headers[k]] = r[k] as string | number | null;
    });
    return o;
  });
  const allSheet = XLSX.utils.json_to_sheet(allData);
  XLSX.utils.book_append_sheet(wb, allSheet, locale === "ar" ? "الكل" : "All");

  for (const [gov, list] of byGroup) {
    const data = list.map((r) => {
      const o: Record<string, string | number | null> = {};
      (Object.keys(headers) as (keyof PlaceRow)[]).forEach((k) => {
        o[headers[k]] = r[k] as string | number | null;
      });
      return o;
    });
    const ws = XLSX.utils.json_to_sheet(data);
    const safe = gov.replace(/[\\/*?:[\]]/g, "").slice(0, 30) || "sheet";
    XLSX.utils.book_append_sheet(wb, ws, safe);
  }

  const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
  return new Response(buf, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": 'attachment; filename="places-scraper.xlsx"',
    },
  });
}
