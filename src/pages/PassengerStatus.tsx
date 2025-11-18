import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { activeLocalSidebarAtom } from '../atoms/sideBarAtoms';
import { calendarData, lineData } from '../atoms/localAtoms';

//import { reasonMokData, passengerMokData } from '../mokdata';

import MainTitle from '../components/maintexts/MainTitle';
import SubTitle from '../components/maintexts/SubTitle';
import MainSmallLayout from '../layouts/MainSmalllLayOut';
import SmallChartContainer from '../components/containers/SmallChartContainer';
import LocalTimeCalendar from '../components/charts/LocalTimeCalendar';
import LocalLine from '../components/charts/LocalLine';
import Pie from '../components/charts/Pie';

//api
import {
  getLocalMonthlyUsage,
  getLocalUsageByRegion,
  getLocalSurveyStats,
  getLocalHourlyUsage,
} from '../api/localApi';
//타입
import type { LocalUsageResult, LocalSurveyResult } from '../types/localType';

const PassengerStatus = () => {
  const [, setActiveLocal] = useAtom(activeLocalSidebarAtom);
  const [passengerData, setPassengerData] = useState<LocalUsageResult | null>(
    null
  );
  const [reasonData, setReasonData] = useState<LocalSurveyResult | null>(null);
  const [, setCalendar] = useAtom(calendarData);
  const [, setLine] = useAtom(lineData);

  useEffect(() => {
    setActiveLocal('이용객 현황');
  }, [setActiveLocal]);

  useEffect(() => {
    getLocalUsageByRegion(1)
      .then(response => {
        setPassengerData(response.data.result);
      })
      .catch(error => {
        console.error('지역별 이용 현황 데이터 가져오기 실패:', error);
      });

    getLocalSurveyStats(1)
      .then(response => {
        setReasonData(response.data.result);
      })
      .catch(error => {
        console.error('설문 통계 데이터 가져오기 실패:', error);
      });

    //기본 값으로 현재 월의 데이터 가져오기
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const yearMonth = `${year}-${month}`;
    getLocalMonthlyUsage(1, yearMonth)
      .then(response => {
        setCalendar(response.data.result.data);
      })
      .catch(error => {
        console.error('월별 이용 현황 데이터 가져오기 실패:', error);
      });

    getLocalHourlyUsage(1, today.toISOString().split('T')[0])
      .then(response => {
        setLine(response.data.result.data);
        console.log('시간대별 이용 현황 데이터:', response.data.result);
      })
      .catch(error => {
        console.error('시간대별 이용 현황 데이터 가져오기 실패:', error);
      });
  }, [setCalendar, setReasonData, setLine]);

  const local = passengerData?.localName || '...';
  return (
    <div
      className="overflow-y-scroll h-full w-full min-w-180 flex flex-col"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <MainTitle title="이용객 현황" />
      <SubTitle subTitle="노선별 운행률 및 승객 수요를 조사합니다." />
      <section className="mt-9">
        <MainTitle title={local + ' 이용 현황'} />
        <MainSmallLayout>
          <SmallChartContainer>
            <div className="mb-10">
              <SubTitle subTitle="이용객 분포 (명)" />
            </div>
            <Pie
              data={
                passengerData?.items.map(item => ({
                  name: item.sigunguName,
                  count: item.count,
                  ratio: item.ratio,
                })) || []
              }
            />
          </SmallChartContainer>
          <SmallChartContainer>
            <div className="mb-10">
              <SubTitle subTitle="노선 개설 이유 설문 (명)" />
            </div>
            <Pie
              data={
                reasonData?.items.map(item => ({
                  name: item.reason,
                  count: item.count,
                  ratio: item.ratio,
                })) || []
              }
            />
          </SmallChartContainer>
        </MainSmallLayout>
      </section>
      <section className="mt-9">
        <MainTitle title={local + ' 상세 이용 현황'} />
        <MainSmallLayout>
          <SmallChartContainer>
            <LocalTimeCalendar />
          </SmallChartContainer>
          <SmallChartContainer>
            <LocalLine />
          </SmallChartContainer>
        </MainSmallLayout>
      </section>
    </div>
  );
};

export default PassengerStatus;
