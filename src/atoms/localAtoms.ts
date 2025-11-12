import { atom } from 'jotai';
import {
  passengerMokData,
  localCalendarData,
  localLineMokData,
  barData,
  busData,
} from '../mokdata';

//이용 현황 데이터
export const passengerData = atom(passengerMokData);

export const pieColor = atom([
  '#FD7E14',
  '#4DA4FF',
  '#66B0FF',
  '#909294',
  '#A6A8A9',
  '#BDBEBF',
  '#D3D3D4',
  '#E9EAEA',
]);

//일자별 이용 현황
export const calendarData = atom(localCalendarData);

//시간대별 분석
export const lineData = atom(localLineMokData);

//바차트 데이터
export const barChartData = atom(barData);

//그래프 디스플레이 유무 데이터
export const graphOptions = atom(false);

//노선별 이용 통계
export const routeUseStateData = atom(busData);
