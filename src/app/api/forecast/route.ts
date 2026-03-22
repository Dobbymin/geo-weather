import { NextRequest, NextResponse } from "next/server";

import { ForecastItem, WEATHER_DESCRIPTIONS, mapWeatherIdToStatus } from "@/entities";
import { WEATHER_API_BASE_URL, WEATHER_API_KEY } from "@/shared";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json({ error: "lat, lon 파라미터가 필요합니다." }, { status: 400 });
  }

  try {
    const url = `${WEATHER_API_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
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
      }),
      date: new Date(item.dt * 1000)
        .toLocaleDateString("ko-KR", {
          month: "numeric",
          day: "numeric",
        })
        .replace(/\. /g, "/")
        .replace(".", ""),
      temp: Math.round(item.main.temp),
      feelsLike: Math.round(item.main.feels_like),
      humidity: item.main.humidity,
      description: WEATHER_DESCRIPTIONS[item.weather[0].id] || item.weather[0].description,
      conditionEn: item.weather[0].main,
      status: mapWeatherIdToStatus(item.weather[0].id),
      icon: item.weather[0].icon,
      pop: Math.round(item.pop * 100), // 강수 확률 (%)
      windSpeed: item.wind.speed,
      isDay: item.sys.pod === "d",
    }));

    // 오늘 날짜 기준 일별 최저/최고 기온
    const dailyMap = new Map<string, { temps: number[]; description: string; status: string }>();

    data.list.forEach((item: ForecastItem) => {
      const date = new Date(item.dt * 1000).toLocaleDateString("ko-KR");
      if (!dailyMap.has(date)) {
        dailyMap.set(date, {
          temps: [],
          description: WEATHER_DESCRIPTIONS[item.weather[0].id] || item.weather[0].description,
          status: mapWeatherIdToStatus(item.weather[0].id),
        });
      }
      dailyMap.get(date)!.temps.push(item.main.temp);
    });

    const daily = Array.from(dailyMap.entries()).map(([date, value]) => ({
      date,
      lowTemp: Math.round(Math.min(...value.temps)),
      highTemp: Math.round(Math.max(...value.temps)),
      description: value.description,
      status: value.status,
    }));

    return NextResponse.json({
      hourly,
      daily,
      city: {
        name: data.city.name,
        country: data.city.country,
        sunrise: new Date(data.city.sunrise * 1000).toLocaleTimeString("ko-KR"),
        sunset: new Date(data.city.sunset * 1000).toLocaleTimeString("ko-KR"),
      },
    });
  } catch (err) {
    console.error("Failed to fetch forecast:", err);
    return NextResponse.json({ error: "예보 정보를 가져오는데 실패했습니다." }, { status: 500 });
  }
}
