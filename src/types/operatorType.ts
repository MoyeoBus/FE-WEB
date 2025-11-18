//기본 통신 구조
export interface ApiResponse<T> {
  code: string;
  message: string;
  result: T;
  isSuccess: boolean;
}

//지역 기반 요청 랭킹 top 5
export interface TopRegionItem {
  areaName: string;
  ranking: number;
  requestCount: number;
}

export interface TopRegionResult {
  items: TopRegionItem[];
}

//전체 상위 탑승 정류장
export interface TopBusStopItem {
  stationName: string;
  ranking: number;
  requestCount: number;
}

export interface TopBusStopResult {
  items: TopBusStopItem[];
}

//노선 거리 TOP 5 조회
export interface RouteDistanceItem {
  routeNo: number;
  ranking: number;
  distance: number;
}

export interface RouteDistanceResult {
  items: RouteDistanceItem[];
}
