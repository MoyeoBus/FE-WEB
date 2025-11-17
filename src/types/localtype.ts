//기본 통신 구조
export interface ApiResponse<T> {
  code: string;
  message: string;
  result: T;
  isSuccess: boolean;
}

//지자체 구역별 이용 현황
export interface RegionItem {
  areaId: number;
  sigunguName: string;
  count: number;
  ratio: string;
}

export interface LocalUsageResult {
  localName: string;
  items: RegionItem[];
}

//월별 인원 통계
export interface MonthlyItem {
  date: string;
  useCount: number;
}

export interface LocalMonthlyUsageResult {
  govName: string;
  data: MonthlyItem[];
}

//설문 통계
export interface SurveyItem {
  reason: string;
  count: number;
  ratio: string;
}

export interface LocalSurveyResult {
  items: SurveyItem[];
}

//시간대별 통계 현황
export interface HourlyItem {
  hour: number;
  useCount: number;
}

export interface LocalHourlyUsageResult {
  govName: string;
  data: HourlyItem[];
}
