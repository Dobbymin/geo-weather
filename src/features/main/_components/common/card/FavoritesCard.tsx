"use client";

import Link from "next/link";

import { type WeatherStatus, getWeatherIcon } from "@/entities";
import { Button, cn } from "@/shared";
import { Edit2, Trash2 } from "lucide-react";

type Props = {
  id: string;
  name: string;
  temp: number;
  status: WeatherStatus;
  condition: string;
  high: number;
  low: number;
};

export const FavoritesCard = ({ id, name, temp, status, condition, high, low }: Props) => {
  const { icon: Icon, color } = getWeatherIcon(status);

  return (
    <div className='group relative'>
      <Link href={`/detail/${id}`}>
        <div
          className={cn(
            "flex flex-col gap-5 rounded-[24px] bg-white p-6 transition-all",
            "border border-transparent hover:border-[#0052ae]/30 hover:shadow-xl",
            "shadow-[0px_12px_40px_0px_rgba(25,28,29,0.06)]",
          )}
        >
          <div className='flex items-start justify-between'>
            <h3 className='line-clamp-1 text-lg font-bold tracking-tight text-[#191c1d]'>{name}</h3>
            <div
              className='flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100'
              onClick={(e) => e.preventDefault()}
            >
              <Button variant='ghost' size='icon' className='size-8 rounded-full text-[#747688] hover:bg-black/5'>
                <Edit2 size={14} />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='size-8 rounded-full text-[#747688] hover:bg-red-50 hover:text-red-500'
              >
                <Trash2 size={14} />
              </Button>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div className={cn("size-10", color)}>
                <Icon className='size-full' />
              </div>
              <div>
                <p className='text-4xl font-bold tracking-tighter text-[#191c1d]'>{temp}°</p>
                <p className='text-sm font-medium text-[#747688]'>{condition}</p>
              </div>
            </div>
            <div className='text-right'>
              <div className='flex flex-col gap-0.5'>
                <span className='text-sm font-bold text-[#191c1d]'>최고: {high}°</span>
                <span className='text-sm font-medium text-[#747688]'>최저: {low}°</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
