import { DetailPage } from "@/views/detail";

export default async function Page({
  params,
}: {
  params: Promise<{ locationId: string }>;
}) {
  const { locationId } = await params;
  
  return <DetailPage locationId={locationId} />;
}
