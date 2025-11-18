import baseAxiosInstance from './baseAxiosInstance';
import type {
  ApiResponse,
  LocalUsageResult,
  LocalMonthlyUsageResult,
  LocalSurveyResult,
  LocalHourlyUsageResult,
  LocalRouteUsageResult,
  LocalRouteDestinationResult,
} from '../types/localType';

//지자체 구역별 이용 현황
export const getLocalUsageByRegion = (region: number) => {
  return baseAxiosInstance.get<ApiResponse<LocalUsageResult>>(
    `/api/v1/locals/${region}`
  );
};

//월별 인원 통계
export const getLocalMonthlyUsage = (region: number, yearMonth: string) => {
  return baseAxiosInstance.get<ApiResponse<LocalMonthlyUsageResult>>(
    `/api/v1/locals/${region}/date?stdDate=${yearMonth}`
  );
};

//설문 통계
export const getLocalSurveyStats = (region: number) => {
  return baseAxiosInstance.get<ApiResponse<LocalSurveyResult>>(
    `/api/v1/locals/${region}/survey`
  );
};

//시간대별 통계 현황
export const getLocalHourlyUsage = (region: number, stdDate: string) => {
  return baseAxiosInstance.get<ApiResponse<LocalHourlyUsageResult>>(
    `/api/v1/locals/${region}/time?stdDate=${stdDate}`
  );
};

//노선별 통계조회
export const getLocalRouteUsage = (region: number) => {
  return baseAxiosInstance.get<ApiResponse<LocalRouteUsageResult>>(
    `/api/v1/locals/${region}/route`
  );
};

//노선별 목적지 도착지 기준 요청 통계
export const getLocalRouteDestinationStats = (routeId: number) => {
  return baseAxiosInstance.get<ApiResponse<LocalRouteDestinationResult>>(
    `/api/v1/locals/${routeId}/destinations`
  );
};

//노선별 출발지 기준 요청 통계
export const getLocalRouteDepartureStats = (routeId: number) => {
  return baseAxiosInstance.get<ApiResponse<LocalRouteDestinationResult>>(
    `/api/v1/locals/${routeId}/departures`
  );
};
