import { atom } from 'jotai';
import { passengerMokData, localCalendarData } from '../mokdata';

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

export const calendarData = atom(localCalendarData);
