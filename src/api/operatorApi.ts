import baseAxiosInstance from './baseAxiosInstance';
import type {
  ApiResponse,
  TopRegionResult,
  TopBusStopResult,
  RouteDistanceResult,
} from '../types/operatorType';

//지역 기반 요청 랭킹 top 5 조회
export const getTopRegionRequests = (operatorId: number) => {
  return baseAxiosInstance.get<ApiResponse<TopRegionResult>>(
    `/api/v1/transports/${operatorId}`
  );
};

//전체 상위 탑승 정류장 조회
export const getTopBusStops = (operatorId: number) => {
  return baseAxiosInstance.get<ApiResponse<TopBusStopResult>>(
    `/api/v1/transports/${operatorId}/stations`
  );
};

//노선 거리 TOP 5 조회
export const getRouteDistances = (operatorId: number) => {
  return baseAxiosInstance.get<ApiResponse<RouteDistanceResult>>(
    `/api/v1/transports/${operatorId}/distances`
  );
};
