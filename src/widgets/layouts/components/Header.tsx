import { Home, Search, Settings, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9fa] shadow-[0px_12px_40px_0px_rgba(25,28,29,0.06)]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 md:px-6">
        {/* Logo & Navigation */}
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="flex shrink-0 items-center gap-2 text-xl font-bold tracking-[-0.6px] text-[#191c1d] md:text-2xl">
            <Image src="/logo.svg" alt="Geo Weather Logo" width={28} height={28} className="md:w-8 md:h-8" priority />
            <span className="hidden md:block">Geo Weather</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="flex h-5 items-center text-sm font-bold text-[#0052ae]"
            >
              Home
            </Link>
            <Link
              href="/forecast"
              className="flex h-5 items-center rounded-lg px-3 py-1 text-sm font-normal text-[#191c1d] hover:bg-black/5"
            >
              Forecast
            </Link>
            <Link
              href="/favorites"
              className="flex h-5 items-center rounded-lg px-3 py-1 text-sm font-normal text-[#191c1d] hover:bg-black/5"
            >
              Favorites
            </Link>
          </nav>
        </div>

        {/* Search & Actions */}
        <div className="flex flex-1 max-w-[448px] items-center justify-end gap-2 md:gap-4 ml-4">
          <div className="relative w-full max-w-[200px] md:max-w-none">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#747688] md:left-4">
              <Search size={14} />
            </div>
            <input
              type="text"
              placeholder="검색..."
              className="w-full rounded-full bg-[#f3f4f5] py-2 pl-9 pr-3 text-xs font-medium text-[#747688] outline-none placeholder:text-[#747688] md:py-2.5 md:pl-12 md:pr-4 md:text-sm"
            />
          </div>
          <div className="flex shrink-0 items-center gap-1 md:gap-2">
            <button className="rounded-full p-1.5 text-[#747688] hover:bg-black/5 md:p-2">
              <Star size={18} className="md:w-5 md:h-5" />
            </button>
            <button className="rounded-full p-1.5 text-[#747688] hover:bg-black/5 md:p-2">
              <Settings size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
