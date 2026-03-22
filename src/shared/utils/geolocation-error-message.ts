export const getGeolocationErrorMessage = (code: number): string => {
  switch (code) {
    case 1:
      return "위치 접근 권한이 거부되었습니다.";
    case 2:
      return "위치 정보를 가져올 수 없습니다.";
    case 3:
      return "위치 요청 시간이 초과되었습니다.";
    default:
      return "알 수 없는 오류가 발생했습니다.";
  }
};
