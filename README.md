# 🌤️ Geo Weather

> 대한민국 행정구역 기반 실시간 날씨 정보 조회 서비스

OpenWeatherMap API와 브라우저 Geolocation API를 결합하여, 현재 위치와 전국 모든 행정구역의 날씨를 조회할 수 있는 날씨
앱입니다.

[![GitHub](https://img.shields.io/badge/GitHub-Dobbymin%2Fgeo--weather-181717?logo=github)](https://github.com/Dobbymin/geo-weather)

## 🚀 배포 사이트

### 개인 웹서버

> Ubuntu 기반 개인 웹서버

https://weather.dobbymin.cloud/

### vercel

https://geo-weather-omega.vercel.app/

## 📌 주요 기능

| 기능                | 설명                                                                                            |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| 🌍 현재 위치 날씨   | 브라우저 Geolocation API로 위치를 감지하고, Kakao Local API 역지오코딩으로 한국 행정구역명 표시 |
| 🔍 장소 검색        | 전국 시·군·구·동 단위 실시간 자동완성 검색 (300ms 디바운싱 적용)                                |
| 📊 시간별 예보 차트 | Recharts 기반 기온·강수확률 복합 차트 (커스텀 툴팁 + 가로 스크롤)                               |
| ⭐ 즐겨찾기         | 장소 추가·삭제·별칭 수정 (최대 6개, localStorage 영속 저장)                                     |
| 📄 날씨 상세 페이지 | 현재 기온, 최저/최고기온, 습도, 풍속, 자외선 지수, 일출/일몰, 강수량, 체감온도                  |
| 📱 반응형 디자인    | 모바일(390px) ~ 데스크탑(1280px) 전 구간 최적화                                                 |

## 🛠️ 기술 스택

| 분류             | 기술                                 |
| ---------------- | ------------------------------------ |
| **Framework**    | Next.js 16.2 (App Router)            |
| **Language**     | TypeScript 5                         |
| **Styling**      | Tailwind CSS v4, shadcn/ui, Radix UI |
| **Server State** | TanStack Query v5                    |
| **Client State** | Zustand v5 + Immer + persist         |
| **차트**         | Recharts                             |
| **아이콘**       | Lucide React                         |
| **알림**         | Sonner                               |
| **유틸리티**     | clsx, tailwind-merge, tw-animate-css |
| **외부 API**     | OpenWeatherMap, Kakao Local API      |

## 🏗️ 아키텍처 (FSD)

Feature Sliced Design 아키텍처를 적용하여 레이어 간 단방향 의존성을 유지합니다.

```
src/
├── app/                      # Next.js App Router (페이지, API Route)
│   ├── api/weather/          # OpenWeatherMap 현재 날씨 프록시
│   ├── api/forecast/         # OpenWeatherMap 5일 예보 프록시
│   ├── api/location/         # 위치 관련 API (검색, 상세, 역지오코딩)
│   └── detail/[locationId]/  # 날씨 상세 페이지
│
├── entities/                 # 핵심 도메인 모델
│   ├── weather/              # 날씨 타입, API 훅, 상태 매핑 유틸
│   └── location/             # 위치 API 훅
│
├── features/                 # 기능 단위 UI + 비즈니스 로직
│   ├── main/                 # 메인 페이지 섹션 (검색, 즐겨찾기, 예보)
│   └── weather-detail/       # 상세 페이지 섹션 (히어로, 차트, 사이드바)
│
├── shared/                   # 재사용 공통 모듈
│   ├── hooks/                # useGeolocation, useFavorite, useDebounce
│   ├── stores/               # useFavoriteStore (Zustand + persist)
│   └── ui/                   # shadcn/ui 래퍼 컴포넌트
│
└── widgets/
    ├── header/               # Header (Main Header, Detail Header)
    └── footer/               # Footer
```

## 🤖 AI 도구 및 MCP 서버 활용

개발 생산성과 품질 향상을 위해 다양한 AI 도구와 MCP(Model Context Protocol) 서버를 활용했습니다.

### MCP 서버

| MCP 서버                    | 활용 목적                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------- |
| **Figma MCP**               | Figma 디자인 파일에서 컴포넌트 스펙(색상, 간격, 타입 등)을 직접 추출하여 코드에 반영         |
| **Sequential Thinking MCP** | 복잡한 로직(즐겨찾기 상태 설계, API 프록시 구조 등)을 단계적으로 분해하고 의사결정 근거 정리 |
| **shadcn MCP**              | shadcn/ui 컴포넌트 탐색 및 적절한 컴포넌트 선택·조합에 활용                                  |
| **Puppeteer MCP**           | 브라우저 자동화를 통한 UI 동작 검증 및 렌더링 결과 확인                                      |
| **GitHub MCP**              | 이슈 관리, PR 생성, 커밋 히스토리 탐색 등 GitHub 워크플로우 보조                             |

### AI 도구

| 도구               | 활용 목적                                    |
| ------------------ | -------------------------------------------- |
| **Gemini CLI**     | 터미널 환경에서의 코드 생성 및 리팩토링 보조 |
| **Antigravity**    | 코드 리뷰 및 개선 사항 제안                  |
| **GitHub Copilot** | 에디터 내 실시간 코드 자동완성 및 함수 생성  |
| **Copilot CLI**    | 터미널 명령어 제안 및 스크립트 작성 보조     |

## 🔍 구현한 기능에 대한 설명

### 1. 현재 위치 날씨

사용자의 현재 위치를 기반으로 날씨 및 시간별 예보 정보를 제공합니다.

- `navigator.geolocation.getCurrentPosition()`으로 위도/경도 취득
- `enableHighAccuracy: true`, `timeout: 10000` 옵션으로 정확도 확보
- 권한 거부·타임아웃 등 에러 코드별 한국어 메시지 처리

### 2. 장소 검색

사용자가 원하는 장소를 검색하여 해당 장소의 날씨 정보를 조회합니다.

- `KOREA_DISTRICTS_WITH_COORDS` — 전국 행정구역 좌표 DB (Kakao API 사전 처리)
- 2글자 이상 입력 시 자동완성 드롭다운 표시 (최대 10건)
- 키보드 Enter 키로 첫 번째 결과 즉시 선택
- 외부 클릭 시 드롭다운 자동 닫힘

### 3. 즐겨찾기 시스템

자주 확인하는 장소를 즐겨찾기에 추가하여 빠르게 날씨 정보를 확인합니다.

- 최대 6개 제한 (`MAX_FAVORITES_COUNT = 6`)
- 중복 추가 방지 로직을 스토어 레벨에서 강제
- 별칭(Alias) 설정 및 초기화 가능
- `localStorage` 영속 저장
- Sonner 토스트로 성공/실패 즉각 피드백

### 4. 시간대별 예보

원하는 장소의 시간별 예보 정보를 카드형/리스트형으로 제공합니다.

- OpenWeatherMap 1시간 단위 예보 API 활용
- 24시간(현재~내일)은 카드형, 이후는 리스트형으로 표시
- `useIsHydrated`로 SSR 하이드레이션 오류 방지
- UI 상태(확장/축소)는 컴포넌트 로컬 상태로 관리

### 5. 날씨 상세 페이지

상세 날씨 정보를 시각적 요소로 한눈에 파악할 수 있도록 제공합니다.

| 섹션        | 표시 정보                                           |
| ----------- | --------------------------------------------------- |
| Hero        | 날짜, 현재 기온, 날씨 상태, 습도, 풍속, 자외선 지수 |
| 차트        | 기온·강수확률 시간별 차트 (Recharts)                |
| 사이드바    | 최저/최고 기온 범위, 비 예보 알림, 공기질           |
| 동적 컨텐츠 | 일출/일몰 시간, 체감온도, 강수량, 가시거리, 기압    |

### 6. UI/UX

- **반응형 디자인**: 모바일/태블릿/데스크탑 자동 대응
- **접근성(a11y)**: ARIA 라벨, 키보드 네비게이션, 포커스 관리
- **로딩/에러 상태**: Skeleton UI, 에러 메시지, 재시도 버튼
- **애니메이션**: 부드러운 전환 효과, 호버 피드백

## 💻 기술적 의사결정

### 1. Next.js 선택 (CSR vs SSR)

CSR 기반 React + Vite와 SSR 기반 Next.js를 두고 고민했습니다. 날씨 데이터를 외부 API로 가져오기 때문에 CSR도
문제없었으나, Next.js API Route를 서버 프록시로 활용하면 API Key 보안과 데이터 가공을 서버에서 처리하고 클라이언트에는
필요한 데이터만 전달할 수 있다는 점에서 Next.js를 선택했습니다. 날씨 앱 특성상 사용자가 서비스에 머무는 시간이 시간이
짧아 SSR의 서버 부하 문제는 크리티컬한 고려사항이 아니라고 판단했습니다.

### 2. Next.js API Route를 서버 프록시로 활용

OpenWeatherMap API Key의 클라이언트 노출을 방지하기 위해 `/api/weather`, `/api/forecast`, `/api/location`을 서버
프록시로 구성했습니다. 클라이언트는 가공된 데이터만 수신합니다.

### 3. 행정구역 좌표 데이터 사전 생성

제공된 `korea_districts.json`에는 좌표 정보가 없어, Kakao Local API를 활용한 스크립트(`generate:coords`)를 1회 실행하여
`korea_districts_with_coords.ts`를 사전 생성했습니다. 런타임에서는 별도 API 호출 없이 좌표를 즉시 사용할 수 있으며,
방대한 좌표 파일 처리는 Next.js 서버에서 담당해 클라이언트에는 필요한 데이터만 전달합니다.

### 4. Zustand Selector Hook 패턴으로 리렌더링 최적화

즐겨찾기는 재방문 시 데이터가 유지되어야 하므로 `localStorage`를, 위치 정보는 실시간성이 중요하고 탭을 닫으면
초기화되어야 하므로 `sessionStorage`를 활용했습니다. 또한 스토어 전체를 구독하는 대신 `useAddFavorite`,
`useRemoveFavorite`, `useGetFavorites` 등 기능별 개별 훅을 제공하여 불필요한 리렌더링을 방지했습니다.

### 5. SSR 하이드레이션 오류 방지

Zustand `persist` 미들웨어 사용 시 서버 HTML과 클라이언트 localStorage 상태 불일치로 하이드레이션 오류가 발생합니다.
`useIsHydrated` 훅으로 마운트 완료 시점을 감지한 후에만 스토어 상태를 렌더링에 반영하여 해결했습니다.

### 6. Recharts 가로 스크롤 레이아웃

`ResponsiveContainer`는 부모 너비를 100% 채우는 방식이라 데이터가 많을 때 차트가 압축되는 문제가 있었습니다. 데이터
개수에 비례한 `minWidth`를 동적으로 계산하고 `initialDimension`을 고정하여 해결했습니다.

### 7. Custom Hook을 통한 UI와 로직 분리

컴포넌트가 화면 렌더링이라는 단일 관심사에 집중할 수 있도록 비즈니스 로직을 custom hook으로 분리했습니다. 이를 통해
유지보수성을 높이고, 추후 테스트 코드 도입 시 순수 함수로 구성된 hook 단위 테스트를 용이하게 만들었습니다.

## 🚀 시작하기

### 사전 요구사항

- Node.js 22 이상
- OpenWeatherMap API Key ([발급](https://openweathermap.org/api))
- Kakao Developers REST API Key ([발급](https://developers.kakao.com/))

### 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성합니다.

```env
WEATHER_API_KEY=your_openweathermap_api_key
WEATHER_API_BASE_URL=https://pro.openweathermap.org/data/2.5
KAKAO_API_KEY=your_kakao_rest_api_key
```

### 설치 및 실행

```bash
# pnpm 설치
npm install -g pnpm

# 패키지 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

### 빌드 및 운영 서버 실행

```bash
pnpm build
pnpm start
```

### 🐳 Docker 배포

#### 사전 요구사항

```ts
// next.config.ts
const nextConfig = {
  output: 'standalone',
};
```

#### 이미지 빌드 및 실행

```bash
# 이미지 빌드
docker build -t geo-weather .

# 컨테이너 실행 (.env 파일을 런타임에 주입)
docker run -p 3000:3000 --env-file .env geo-weather
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 행정구역 좌표 데이터 재생성 (선택)

```bash
pnpm generate:coords
```

## ⚠️ 알려진 제한 사항

- **OpenWeatherMap 플랜**: Student 인증을 통해 Pro 플랜을 사용 중으로 1시간 단위 예보를 제공합니다. 무료 플랜 사용 시
  3시간 단위 예보만 제공됩니다.
- **자외선 지수**: 실측값 대신 등급(보통, 높음 등) 기반으로 표시합니다.
- **즐겨찾기 동기화**: 브라우저 localStorage에 저장되어 기기 간 동기화가 불가합니다.
- **위치 권한**: 거부 시 수동 검색으로만 이용 가능합니다.
