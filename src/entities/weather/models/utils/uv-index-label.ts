export const getUvIndexLabel = (uvIndex: string): string => {
  switch (uvIndex) {
    case "Good":
      return "좋음";
    case "Fair":
      return "약간 좋음";
    case "Moderate":
      return "보통";
    case "Poor":
      return "높음";
    case "Very Poor":
      return "위험";
    default:
      return uvIndex;
  }
};
