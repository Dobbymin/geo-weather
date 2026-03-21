import { BentoCard, SunriseSunset } from "../components";

export const DynamicContentSection = () => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
      <SunriseSunset sunrise='06:12 AM' sunset='07:45 PM' />
      <BentoCard label='Visibility' value={14.2} unit='km' description='Clear visibility for safe driving.' />
      <BentoCard label='Pressure' value={1013} unit='hPa' description='Normal atmospheric pressure.' />
    </div>
  );
};
