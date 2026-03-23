import { NextRequest, NextResponse } from "next/server";

import { WEATHER_DESCRIPTIONS, mapWeatherIdToStatus } from "@/entities";
import { WEATHER_API_BASE_URL, WEATHER_API_KEY } from "@/shared";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json({ error: "lat, lon 파라미터가 필요합니다." }, { status: 400 });
  }

  try {
    const res = await fetch(
      `${WEATHER_API_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
    );

    if (!res.ok) {
      throw new Error(`Weather API response error: ${res.status}`);
    }

    const data = await res.json();

    const weatherId = data.weather[0].id;

    return NextResponse.json({
      description: WEATHER_DESCRIPTIONS[weatherId] || data.weather[0].description,
      conditionEn: data.weather[0].main,
      name: data.name,
      temp: Math.round(data.main.temp),
      lowTemp: Math.round(data.main.temp_min),
      highTemp: Math.round(data.main.temp_max),
      status: mapWeatherIdToStatus(weatherId),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      visibility: data.visibility / 1000,
      pressure: data.main.pressure,
    });
  } catch (error) {
    console.error("Failed to fetch weather:", error);
    return NextResponse.json({ error: "날씨 정보를 가져오는데 실패했습니다." }, { status: 500 });
  }
}
