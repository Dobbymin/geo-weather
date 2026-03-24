import { KOREA_DISTRICTS_WITH_COORDS } from "../constants";

/**
 * locationId(URL 파라미터)를 기반으로 지역의 풀네임을 반환합니다.
 */
export const resolveLocationName = (locationId: string): string => {
  try {
    const decoded = decodeURIComponent(locationId).normalize("NFC");
    const district = KOREA_DISTRICTS_WITH_COORDS.find(
      (d) => d.id === decoded || d.fullName === decoded.replace(/-/g, " "),
    );
    return district?.fullName ?? decoded.replace(/-/g, " ");
  } catch {
    return locationId.replace(/-/g, " ");
  }
};
