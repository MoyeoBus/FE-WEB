type DataProp = {
  id: string;
  label: string;
  value: number;
  persent: string;
};

//로컬 이용객 목데이터
export const passengerMokData: DataProp[] = [
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
