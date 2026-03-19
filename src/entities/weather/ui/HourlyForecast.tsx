"use client";

import { Cloud, Sun, CloudRain } from "lucide-react";

export function HourlyForecast() {
  const hours = [
    { time: "현재", temp: 12, icon: <Sun className="h-5 w-5" /> },
    { time: "1시", temp: 11, icon: <Sun className="h-5 w-5" /> },
    { time: "2시", temp: 10, icon: <Cloud className="h-5 w-5" /> },
    { time: "3시", temp: 10, icon: <Cloud className="h-5 w-5" /> },
    { time: "4시", temp: 9, icon: <CloudRain className="h-5 w-5" /> },
    { time: "5시", temp: 9, icon: <CloudRain className="h-5 w-5" /> },
    { time: "6시", temp: 8, icon: <Cloud className="h-5 w-5" /> },
    { time: "7시", temp: 8, icon: <Cloud className="h-5 w-5" /> },
  ];

  return (
    <section className="w-full space-y-3 mb-8">
      <h2 className="text-xl font-bold px-1">시간별 예보</h2>
      <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
        {hours.map((h, i) => (
          <div key={i} className="flex flex-col items-center min-w-[60px] p-3 bg-secondary/50 rounded-xl space-y-2">
            <span className="text-xs text-muted-foreground">{h.time}</span>
            <div className="text-primary">{h.icon}</div>
            <span className="font-bold">{h.temp}°</span>
          </div>
        ))}
      </div>
    </section>
  );
}
