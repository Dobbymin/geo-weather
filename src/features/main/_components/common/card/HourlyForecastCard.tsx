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
          ? "bg-[#0052ae] text-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
          : "border border-transparent bg-white text-[#191c1d]",
      )}
    >
      <span
        className={cn("text-sm font-bold tracking-[1.2px] uppercase", isActive ? "text-white/80" : "text-[#747688]")}
      >
        {time}
      </span>

      {/* 아이콘: isActive일 때는 흰색, 아닐 때는 날씨 상태에 맞는 색상 적용 */}
      <div className={cn("size-7", isActive ? "text-white" : color)}>
        <Icon className='size-full' />
      </div>

      <span className='text-2xl leading-8 font-bold'>{temp}°</span>
    </div>
  );
};
