import { type WeatherStatus, getWeatherIcon } from "@/entities";
import { cn } from "@/shared";

type Props = {
  time: string;
  status: WeatherStatus;
  temp: number;
  isActive?: boolean;
};

export const HourlyForecastCard = ({ time, status, temp, isActive = false }: Props) => {
  const { icon: Icon, color } = getWeatherIcon(status);

  return (
    <div
      className={cn(
        "flex min-w-28 flex-col items-center gap-4 rounded-[24px] p-5 transition-all",
        isActive
          ? "bg-primary text-primary-foreground shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
          : "border border-transparent bg-card text-foreground",
      )}
    >
      <span
        className={cn(
          "text-sm font-bold tracking-[1.2px] uppercase",
          isActive ? "text-primary-foreground/80" : "text-muted-foreground",
        )}
      >
        {time}
      </span>

      <div className={cn("size-7", isActive ? "text-primary-foreground" : color)}>
        <Icon className='size-full' />
      </div>

      <span className='font-display text-2xl font-bold leading-8'>{temp}°</span>
    </div>
  );
};
