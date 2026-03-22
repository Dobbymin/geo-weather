"use client";

import Link from "next/link";

import { type WeatherStatus, getWeatherIcon } from "@/entities";
import { Button, DYNAMIC_ROUTE_PATH, cn } from "@/shared";
import { Edit2, Trash2 } from "lucide-react";

type Props = {
  id: string;
  name: string;
  temp: number;
  status: WeatherStatus;
  condition: string;
  high: number;
  low: number;
  onEditAction?: (e: React.MouseEvent) => void;
  onDeleteAction?: (e: React.MouseEvent) => void;
};

export const FavoritesCard = ({
  id,
  name,
  temp,
  status,
  condition,
  high,
  low,
  onEditAction,
  onDeleteAction,
}: Props) => {
  const { icon: Icon, color } = getWeatherIcon(status);

  return (
    <div className='group relative'>
      <Link href={DYNAMIC_ROUTE_PATH.DETAIL(id)}>
        <div
          className={cn(
            "flex flex-col gap-5 rounded-[24px] bg-card p-6 transition-all",
            "border border-transparent hover:border-primary/30 hover:shadow-xl",
            "shadow-[0px_12px_40px_0px_rgba(25,28,29,0.06)]",
          )}
        >
          <div className='flex items-start justify-between'>
            <h3 className='line-clamp-1 text-lg font-bold tracking-tight text-foreground'>{name}</h3>
            <div
              className='flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100'
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Button
                variant='ghost'
                size='icon'
                onClick={onEditAction}
                className='size-8 rounded-full text-muted-foreground hover:bg-accent'
              >
                <Edit2 size={14} />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                onClick={onDeleteAction}
                className='size-8 rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive'
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
                <p className='font-display text-4xl font-bold tracking-tighter text-foreground'>{temp}°</p>
                <p className='text-sm font-medium text-muted-foreground'>{condition}</p>
              </div>
            </div>
            <div className='text-right'>
              <div className='flex flex-col gap-0.5'>
                <span className='text-sm font-bold text-foreground'>최고: {high}°</span>
                <span className='text-sm font-medium text-muted-foreground'>최저: {low}°</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
