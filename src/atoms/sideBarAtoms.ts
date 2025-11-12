import { atom } from 'jotai';

// 지자체, 운수사를 구분하기 위한 atom
export const userRoleAtom = atom<'local' | 'operator' | null>('operator');

export const activeLocalSidebarAtom = atom<string>('이용객 현황');

export const activeOperatorSidebarAtom = atom<string>('데이터 분석');
