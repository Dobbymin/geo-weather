import { type WeatherStatus } from "@/entities";

import { FavoritesCard } from "../../common";

export const FavoritesList = () => {
  const FAVORITES_DATA_MOCK: {
    id: string;
    name: string;
    temp: number;
    status: WeatherStatus;
    condition: string;
    high: number;
    low: number;
  }[] = [
    { id: "서울특별시-종로구", name: "서울특별시 종로구", temp: 12, status: "CLEAR", condition: "맑음", high: 15, low: 8 },
    {
      id: "경기도-수원시영통구",
      name: "경기도 수원시 영통구",
      temp: 24,
      status: "RAIN",
      condition: "흐리고 비",
      high: 26,
      low: 18,
    },
    {
      id: "jeju-city",
      name: "제주특별자치도 제주시",
      temp: 21,
      status: "CLOUDY",
      condition: "구름 많음",
      high: 22,
      low: 20,
    },
    {
      id: "busan-haeundae",
      name: "부산광역시 해운대구",
      temp: 18,
      status: "PARTLY_CLOUDY",
      condition: "구름 조금",
      high: 20,
      low: 15,
    },
    { id: "daegu-junggu", name: "대구광역시 중구", temp: 15, status: "CLEAR", condition: "맑음", high: 18, low: 10 },
    { id: "gangneung", name: "강원도 강릉시", temp: 8, status: "SNOW", condition: "눈", high: 10, low: 2 },
    { id: "gwangju-bukgu", name: "광주광역시 북구", temp: 14, status: "RAIN", condition: "비", high: 16, low: 11 },
    {
      id: "daejeon-seogu",
      name: "대전광역시 서구",
      temp: 13,
      status: "THUNDERSTORM",
      condition: "천둥번개",
      high: 15,
      low: 9,
    },
  ];

  return (
    <section className='w-full space-y-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {FAVORITES_DATA_MOCK.map((item) => (
          <FavoritesCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
