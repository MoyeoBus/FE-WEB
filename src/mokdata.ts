type PieDataProp = {
  id: string;
  label: string;
  value: number;
  persent: string;
};

//로컬 이용객 목데이터
export const passengerMokData: PieDataProp[] = [
  {
    id: 'haskell',
    label: 'haskell',
    value: 80,
    persent: '40%',
  },
  {
    id: 'python',
    label: 'python',
    value: 60,
    persent: '20%',
  },
  {
    id: 'stylus',
    label: 'stylus',
    value: 40,
    persent: '10%',
  },
  {
    id: 'lisp',
    label: 'lisp',
    value: 30,
    persent: '4%',
  },
  {
    id: 'erlang',
    label: 'erlang',
    value: 20,
    persent: '2%',
  },
  {
    id: 'd',
    label: 'd',
    value: 10,
    persent: '40%',
  },
  {
    id: 'd1',
    label: 'd1',
    value: 10,
    persent: '40%',
  },
  {
    id: 'd3',
    label: 'd3',
    value: 10,
    persent: '40%',
  },
];

type CalendarDataProp = {
  value: number;
  day: string;
};

//로컬 캘린더 차트 목데이터
export const localCalendarData: CalendarDataProp[] = [
  { day: '2025-05-01', value: 305 },
  { day: '2025-05-02', value: 0 },
  { day: '2025-05-03', value: 0 },
  { day: '2025-05-04', value: 0 },
  { day: '2025-05-05', value: 0 },
  { day: '2025-05-06', value: 0 },
  { day: '2025-05-07', value: 0 },
  { day: '2025-05-08', value: 216 },
  { day: '2025-05-09', value: 0 },
  { day: '2025-05-10', value: 0 },
  { day: '2025-05-11', value: 21 },
  { day: '2025-05-12', value: 0 },
  { day: '2025-05-13', value: 0 },
  { day: '2025-05-14', value: 0 },
  { day: '2025-05-15', value: 0 },
  { day: '2025-05-16', value: 0 },
  { day: '2025-05-17', value: 47 },
  { day: '2025-05-18', value: 0 },
  { day: '2025-05-19', value: 19 },
  { day: '2025-05-20', value: 85 },
  { day: '2025-05-21', value: 0 },
  { day: '2025-05-22', value: 0 },
  { day: '2025-05-23', value: 0 },
  { day: '2025-05-24', value: 378 },
  { day: '2025-05-25', value: 0 },
  { day: '2025-05-26', value: 0 },
  { day: '2025-05-27', value: 0 },
  { day: '2025-05-28', value: 0 },
  { day: '2025-05-29', value: 0 },
  { day: '2025-05-30', value: 0 },
  { day: '2025-05-31', value: 232 },
];

//시간대별 분석
type LocalLineDataProp = {
  id: string;
  data: { x: string; y: number }[];
};

export const localLineMokData: LocalLineDataProp[] = [
  {
    id: 'path',
    data: [
      { x: '05', y: 10 },
      { x: '06', y: 18 },
      { x: '07', y: 22 },
      { x: '08', y: 30 },
      { x: '09', y: 25 },
      { x: '10', y: 26 },
      { x: '11', y: 37 },
      { x: '12', y: 53 },
      { x: '13', y: 30 },
      { x: '14', y: 16 },
      { x: '15', y: 27 },
      { x: '16', y: 11 },
      { x: '17', y: 3 },
      { x: '18', y: 6 },
      { x: '19', y: 17 },
      { x: '20', y: 27 },
      { x: '21', y: 26 },
      { x: '22', y: 67 },
      { x: '23', y: 2 },
    ],
  },
];

//로컬 노선현황 바차트 목데이터
type BarDataProp = {
  value: number;
  name: string;
};

export const barData: BarDataProp[] = [
  { value: 190, name: '완산체육관' },
  { value: 70, name: '진안의료원' },
  { value: 30, name: '덕진공원' },
  { value: 50, name: '전주역' },
  { value: 50, name: '전주역' },
  { value: 50, name: '전주역' },
  { value: 50, name: '전주역' },
  { value: 50, name: '전주역' },
  { value: 50, name: '전주역' },
];

//로컬 노선별 이용 통계 목데이터

type BusDataProp = {
  line: string;
  buStopCount: number;
  people: number;
  distance: number;
};

export const busData: BusDataProp[] = [
  { line: '107번', buStopCount: 18, people: 19, distance: 98 },
  { line: '106번', buStopCount: 24, people: 27, distance: 112 },
  { line: '105번', buStopCount: 20, people: 23, distance: 120 },
  { line: '104번', buStopCount: 16, people: 15, distance: 87 },
  { line: '103번', buStopCount: 29, people: 31, distance: 135 },
  { line: '102번', buStopCount: 14, people: 12, distance: 75 },
  { line: '110번', buStopCount: 29, people: 31, distance: 135 },
  { line: '1222번', buStopCount: 14, people: 12, distance: 75 },
];

//운수사 노선 생성 상위 지역 목데이터
export const topRoute: BarDataProp[] = [
  { value: 50, name: '진안읍' },
  { value: 46, name: '용담면' },
  { value: 40, name: '안천면' },
  { value: 20, name: '길동읍' },
  { value: 10, name: '영희읍' },
];

//전체 상위 탑승 정류장
export const topBusStop: BarDataProp[] = [
  { value: 150, name: '진안의료원' },
  { value: 120, name: '완산체육관' },
  { value: 90, name: '덕진공원' },
  { value: 60, name: '전주역' },
  { value: 30, name: '고속버스터미널' },
];

//노선별 총 운행 거리비교
export const routeDistanceData: BarDataProp[] = [
  { value: 300, name: '107번' },
  { value: 250, name: '106번' },
  { value: 200, name: '105번' },
  { value: 150, name: '104번' },
  { value: 100, name: '103번' },
  { value: 50, name: '102번' },
  { value: 10, name: '101번' },
  { value: 20, name: '108번' },
  { value: 40, name: '109번' },
  { value: 60, name: '110번' },
];

//노선 개설 이유 설문 목데이터
export const reasonMokData: PieDataProp[] = [
  { id: '출퇴근', label: '출퇴근', value: 40, persent: '40%' },
  { id: '통학', label: '통학', value: 25, persent: '25%' },
  { id: '쇼핑', label: '쇼핑', value: 15, persent: '15%' },
  { id: '레저', label: '레저', value: 10, persent: '10%' },
  { id: '기타', label: '기타', value: 10, persent: '10%' },
];
