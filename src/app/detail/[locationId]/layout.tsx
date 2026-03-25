import { resolveLocationName } from "@/entities/location/models/utils/resolveLocationName";
import { DetailHeader } from "@/widgets";

export default async function DetailLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locationId: string }>;
}>) {
  const { locationId } = await params;
  const locationName = resolveLocationName(locationId);

  return (
    <>
      <header className='fixed top-0 right-0 left-0 z-50 bg-background shadow-[0px_12px_40px_0px_rgba(25,28,29,0.06)]'>
        <DetailHeader locationId={locationId} locationName={locationName} />
      </header>
      {children}
    </>
  );
}
