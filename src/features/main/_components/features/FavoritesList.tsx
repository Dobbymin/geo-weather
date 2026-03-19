"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

export function FavoritesList() {
  const mockFavorites = [
    { id: "서울특별시-종로구", name: "서울특별시 종로구", temp: 12, condition: "맑음", high: 15, low: 8 },
    { id: "경기도-수원시-영통구", name: "경기도 수원시 영통구", temp: 24, condition: "흐리고 비", high: 26, low: 18 },
    { id: "제주특별자치도-제주시", name: "제주특별자치도 제주시", temp: 21, condition: "구름 많음", high: 22, low: 20 },
  ];

  return (
    <section className="w-full space-y-4">
      <h2 className="text-xl font-bold px-1">즐겨찾기</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {mockFavorites.map((item) => (
          <Link href={`/detail/${item.id}`} key={item.id}>
            <Card className="relative overflow-hidden group hover:border-[#0052ae] transition-colors cursor-pointer">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.preventDefault()}>
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={(e) => e.preventDefault()}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold tracking-tight">{item.temp}°</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.condition}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p>최고: {item.high}°</p>
                    <p className="text-muted-foreground">최저: {item.low}°</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
