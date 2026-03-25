import { useRouter } from "next/navigation";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

import { District } from "@/entities";
import { DYNAMIC_ROUTE_PATH, useDebounce } from "@/shared";

export const useLocationSearch = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const containerRef = useRef<HTMLDivElement>(null);

  const { data: results = [], isLoading } = useQuery<District[]>({
    queryKey: ["location-search", debouncedSearchTerm],
    queryFn: async () => {
      if (debouncedSearchTerm.length < 2) return [];
      const res = await fetch(`/api/location/search?q=${encodeURIComponent(debouncedSearchTerm)}`);
      if (!res.ok) return [];
      return res.json();
    },
    enabled: debouncedSearchTerm.length >= 2,
  });

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && results && results.length > 0) {
      handleSelect(results[0].id);
    }
  };

  const handleFocus = () => {
    if (searchTerm.length >= 2) {
      setIsOpen(true);
    }
  };

  return {
    searchTerm,
    isOpen,
    setIsOpen,
    results,
    isLoading,
    containerRef,
    handleSelect,
    handleChange,
    handleKeyDown,
    handleFocus,
  };
};
