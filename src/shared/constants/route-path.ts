export const ROUTE_PATH = {
  HOME: "/",
  DETAIL: "/detail/:locationId",
};

export const DYNAMIC_ROUTE_PATH = {
  DETAIL: (locationId: string) => ROUTE_PATH.DETAIL.replace(":locationId", locationId),
};
