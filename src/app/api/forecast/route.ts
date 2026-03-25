import { NextRequest, NextResponse } from "next/server";

import { ForecastItem, mapWeatherIdToStatus } from "@/entities";
import { WEATHER_PRO_API_BASE_URL, WEATHER_PRO_API_KEY } from "@/shared";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json({ error: "lat, lon 파라미터가 필요합니다." }, { status: 400 });
  }

  try {
    const url = `${WEATHER_PRO_API_BASE_URL}/forecast/hourly?lat=${lat}&lon=${lon}&appid=${WEATHER_PRO_API_KEY}&units=metric`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Forecast API response error: ${res.status}`);
    }

    const data = await res.json();

    // 시간별 예보 가공
    const hourly = data.list.map((item: ForecastItem) => ({
      dt: item.dt,
      time: new Date(item.dt * 1000).toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Seoul",
      }),
      date: new Date(item.dt * 1000)
        .toLocaleDateString("ko-KR", {
          month: "numeric",
          day: "numeric",
          timeZone: "Asia/Seoul",
        })
        .replace(/\. /g, "/")
        .replace(".", ""),
      temp: Math.round(item.main.temp),
      conditionEn: item.weather[0].main,
      status: mapWeatherIdToStatus(item.weather[0].id),
      pop: Math.round(item.pop * 100), // 강수 확률 (%)
    }));

    // 오늘 날짜 기준 일별 최저/최고 기온
    const dailyMap = new Map<string, { temps: number[] }>();

    data.list.forEach((item: ForecastItem) => {
      const date = new Date(item.dt * 1000)
        .toLocaleDateString("ko-KR", {
          month: "numeric",
          day: "numeric",
          timeZone: "Asia/Seoul",
        })
        .replace(/\. /g, "/")
        .replace(".", "");

      if (!dailyMap.has(date)) {
        dailyMap.set(date, { temps: [] });
      }
      dailyMap.get(date)!.temps.push(item.main.temp);
    });

    const daily = Array.from(dailyMap.entries()).map(([date, value]) => ({
      date,
      lowTemp: Math.round(Math.min(...value.temps)),
      highTemp: Math.round(Math.max(...value.temps)),
    }));

    return NextResponse.json({
      hourly,
      daily,
    });
  } catch (err) {
    console.error("Failed to fetch forecast:", err);
    return NextResponse.json({ error: "예보 정보를 가져오는데 실패했습니다." }, { status: 500 });
  }
}
