import { NextRequest, NextResponse } from "next/server";

export const KAKAO_API_KEY = process.env.KAKAO_REST_API_KEY;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json({ error: "lat, lon 파라미터가 필요합니다." }, { status: 400 });
  }

  try {
    const res = await fetch(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${lon}&y=${lat}`, {
      headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
    });

    const data = await res.json();
    const region = data.documents?.[0];

    if (!region) {
      return NextResponse.json({ error: "해당 좌표에 대한 지역 정보를 찾을 수 없습니다." }, { status: 404 });
    }

    return NextResponse.json({
      locationName: region.address_name, // 예: "서울특별시 종로구 청운동"
    });
  } catch (err) {
    console.error("Failed to fetch location:", err);
    return NextResponse.json({ error: "위치 정보를 가져오는데 실패했습니다." }, { status: 500 });
  }
}
