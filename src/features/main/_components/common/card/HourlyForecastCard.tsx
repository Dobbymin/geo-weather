import { type WeatherStatus, getWeatherIcon } from "@/entities";
import { Skeleton, cn } from "@/shared";

type Props = {
  date?: string;
  time?: string;
  status?: WeatherStatus;
  temp?: number;
  isActive?: boolean;
  isLoading?: boolean;
};

export const HourlyForecastCard = ({ date, time, status, temp, isActive = false, isLoading = false }: Props) => {
  const { icon: Icon, color } = getWeatherIcon(status || "CLEAR");

  return (
    <div
      className={cn(
        "flex min-w-24 flex-col items-center gap-4 rounded-[24px] p-3 transition-all",
        isActive
          ? "bg-primary text-primary-foreground shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
          : "border border-transparent bg-card text-foreground",
      )}
    >
      <div className='flex flex-col items-center gap-2'>
        {isLoading ? (
          <Skeleton className='h-4 w-8 rounded' />
        ) : (
          <span
            className={cn("text-sm font-medium", isActive ? "text-primary-foreground/60" : "text-muted-foreground/60")}
          >
            {date}
          </span>
        )}
        {isLoading ? (
          <Skeleton className='h-3 w-10 rounded' />
        ) : (
          <span
            className={cn(
              "text-xs font-bold uppercase",
              isActive ? "text-primary-foreground/80" : "text-muted-foreground",
            )}
          >
            {time}
          </span>
        )}
      </div>

      <div className={cn("size-7", isActive ? "text-primary-foreground" : color)}>
        {isLoading ? <Skeleton className='size-full rounded-full' /> : <Icon className='size-full' />}
      </div>

      {isLoading ? (
        <Skeleton className='h-8 w-10 rounded' />
      ) : (
        <span className='font-display text-2xl leading-8 font-bold'>{temp}°</span>
      )}
    </div>
  );
};
