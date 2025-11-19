import baseAxiosInstance from './baseAxiosInstance';
import type {
  ApiResponse,
  TopRegionResult,
  TopBusStopResult,
  RouteDistanceResult,
  OperatorStatusResult,
  OperatorHistoryResult,
  OperatorTrackingResult,
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

//운수사 운행 현황 조회
export const getOperatorStatus = (operatorId: number) => {
  return baseAxiosInstance.get<ApiResponse<OperatorStatusResult>>(
    `/api/v1/transports/${operatorId}/operate`
  );
};

//운수사 운행 이력 조회
export const getOperatorHistory = (routeId: number, operatorId: number) => {
  return baseAxiosInstance.get<ApiResponse<OperatorHistoryResult>>(
    `/api/v1/transports/${routeId}/track?operatorId=${operatorId}`
  );
};

//운수사 운행 추적 조회
export const getOperatorTracking = (routeId: number) => {
  return baseAxiosInstance.get<ApiResponse<OperatorTrackingResult>>(
    `/api/v1/transports/${routeId}/track`
  );
};
