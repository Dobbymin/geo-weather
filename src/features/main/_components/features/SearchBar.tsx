"use client";

import { Search } from "lucide-react";
import { Input } from "@/shared/components/ui/input";

export function SearchBar() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <Input 
          className="pl-10 pr-4 py-2 w-full" 
          placeholder="지역 검색 (읍, 면, 동 등)" 
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
      </div>
      {/* TODO: 구현: korea_districts.json 필터링 기반 드롭다운 */}
    </div>
  );
}
