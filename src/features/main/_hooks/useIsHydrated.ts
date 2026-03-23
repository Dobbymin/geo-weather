"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export const useIsHydrated = () => {
  return useSyncExternalStore(
    subscribe,
    () => true, // 클라이언트
    () => false, // 서버
  );
};
