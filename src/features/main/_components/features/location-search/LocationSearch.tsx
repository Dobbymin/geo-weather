"use client";

import { useRouter } from "next/navigation";

import { useEffect, useMemo, useRef, useState } from "react";

import { KOREA_DISTRICTS_WITH_COORDS } from "@/entities";
import { DYNAMIC_ROUTE_PATH, Input, useDebounce } from "@/shared";
import { Search } from "lucide-react";

export const LocationSearch = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (debouncedSearchTerm.length < 2) return [];

    return KOREA_DISTRICTS_WITH_COORDS.filter(
      (district) => district.fullName.includes(debouncedSearchTerm) || district.name.includes(debouncedSearchTerm),
    ).slice(0, 10);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (districtId: string) => {
    setIsOpen(false);
    setSearchTerm("");
    router.push(DYNAMIC_ROUTE_PATH.DETAIL(districtId));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length >= 2) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className='relative w-full max-w-50 md:max-w-none'>
      <div className='absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground md:left-4'>
        <Search size={14} />
      </div>
      <Input
        type='text'
        placeholder='검색 (예: 종로구, 청운동)'
        value={searchTerm}
        onChange={handleChange}
        onFocus={() => searchTerm.length >= 2 && setIsOpen(true)}
        className='w-full rounded-full border-none bg-muted py-2 pr-3 pl-9 text-xs font-medium text-muted-foreground placeholder:text-muted-foreground focus-visible:ring-0 md:py-2.5 md:pr-4 md:pl-12 md:text-sm'
      />

      {isOpen && (
        <div className='absolute top-full left-0 z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-xl border border-slate-200 bg-white p-2 shadow-lg'>
          {results.length > 0 ? (
            results.map((district) => (
              <button
                key={district.id}
                onClick={() => handleSelect(district.id)}
                className='w-full rounded-lg px-4 py-2 text-left text-sm transition-colors hover:bg-slate-100'
              >
                <p className='font-medium text-slate-900'>{district.fullName}</p>
              </button>
            ))
          ) : (
            <div className='px-4 py-3 text-center text-sm text-slate-500'>검색 결과가 없습니다.</div>
          )}
        </div>
      )}
    </div>
  );
};
