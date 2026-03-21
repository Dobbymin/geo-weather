"use client";

import { usePathname } from "next/navigation";

import { DetailHeader, MainHeader } from "../components";

export const Header = () => {
  const pathname = usePathname();

  const isDetail = pathname?.startsWith("/detail");
  const locationId = isDetail ? pathname.split("/")[2] : "";

  return (
    <header className='bg-background fixed top-0 right-0 left-0 z-50 shadow-[0px_12px_40px_0px_rgba(25,28,29,0.06)]'>
      {isDetail ? <DetailHeader locationId={locationId} /> : <MainHeader />}
    </header>
  );
};
