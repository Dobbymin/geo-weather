"use client";

import { Cloud, MapPin } from "lucide-react";

export function CurrentWeatherCard() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg mb-8">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-1 opacity-90">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">서울특별시 종로구 (현재 위치)</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">12°</h1>
          <p className="text-lg opacity-90">맑음</p>
        </div>
        <Cloud className="h-16 w-16" strokeWidth={1.5} />
      </div>
      <div className="mt-8 flex gap-4 text-sm font-medium">
        <span className="px-3 py-1 bg-white/20 rounded-full">최고: 15°</span>
        <span className="px-3 py-1 bg-white/20 rounded-full">최저: 8°</span>
      </div>
    </div>
  );
}
