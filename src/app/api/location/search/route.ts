import { NextRequest, NextResponse } from "next/server";

import { KOREA_DISTRICTS_WITH_COORDS } from "@/entities/location/models/constants/korea-districts-with-coords";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  if (!q || q.length < 2) {
    return NextResponse.json([]);
  }

  const results = KOREA_DISTRICTS_WITH_COORDS.filter(
    (district) => district.fullName.includes(q) || district.name.includes(q),
  ).slice(0, 10);

  return NextResponse.json(results);
}
