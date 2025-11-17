import baseAxiosInstance from './baseAxiosInstance';
import type {
  ApiResponse,
  LocalUsageResult,
  LocalMonthlyUsageResult,
  LocalSurveyResult,
  LocalHourlyUsageResult,
} from '../types/localtype';

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
