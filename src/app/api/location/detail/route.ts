import { NextRequest, NextResponse } from "next/server";

import { KOREA_DISTRICTS_WITH_COORDS } from "@/entities/location/models/constants/korea-districts-with-coords";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "id 파라미터가 필요합니다." }, { status: 400 });
  }

  const decodedId = decodeURIComponent(id).normalize("NFC");

  // 행정구역 좌표 정보 찾기 (ID로 먼저 찾고, 없으면 fullName으로 검색)
  let district = KOREA_DISTRICTS_WITH_COORDS.find((d) => d.id === decodedId);

  if (!district) {
    // ID 매칭 실패 시 이름으로 한 번 더 시도 (URL 인코딩/디코딩 변수 대응)
    district = KOREA_DISTRICTS_WITH_COORDS.find((d) => d.fullName === decodedId.replace(/-/g, " "));
  }

  if (!district) {
    return NextResponse.json({ error: "해당 지역 정보를 찾을 수 없습니다." }, { status: 404 });
  }

  return NextResponse.json(district);
}
