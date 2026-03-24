import { WeatherStatus, getWeatherIcon } from "@/entities";

type TooltipPayloadItem = {
  name: string;
  value: number;
  payload: {
    status: WeatherStatus;
    temp: number;
    pop: number;
    time: string;
    date: string;
  };
};

type Props = {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
};

export const CustomTooltip = ({ active, payload }: Props) => {
  if (active && payload && payload.length > 0) {
    const data = payload[0].payload;

    const temp = payload.find((p) => p.name === "temp")?.value;
    const pop = payload.find((p) => p.name === "pop")?.value;

    const { icon: HourlyIcon } = getWeatherIcon(data.status);

    return (
      <div className='flex flex-col gap-2 rounded-2xl border border-border/50 bg-white p-4 shadow-lg'>
        <div className='flex items-center gap-2'>
          <HourlyIcon className='size-5 text-foreground' />
          <span className='text-sm font-bold text-foreground'>{temp}°C</span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium text-cyan-600'>강수확률 {pop}%</span>
        </div>
      </div>
    );
  }

  return null;
};
