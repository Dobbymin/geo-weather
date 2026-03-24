"use client";

import { Input } from "@/shared";
import { Search } from "lucide-react";

import { useLocationSearch } from "../../../_hooks/useLocationSearch";

export const LocationSearch = () => {
  const { searchTerm, isOpen, results, containerRef, handleSelect, handleChange, handleKeyDown, handleFocus } =
    useLocationSearch();

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
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
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
