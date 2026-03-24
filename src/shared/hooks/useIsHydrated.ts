"use client";

import { useSyncExternalStore } from "react";

/**
 * SSR 환경에서 Client Side Hydration이 완료되었는지 확인하는 훅
 * localStorage 등을 사용하는 컴포넌트에서 하이드레이션 불일치 에러를 방지하기 위해 사용
 */
export const useIsHydrated = () => {
  return useSyncExternalStore(
    () => () => {}, // subscribe (변경 없음)
    () => true, // getSnapshot (클라이언트)
    () => false, // getServerSnapshot (서버)
  );
};
