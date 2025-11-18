import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { activeOperatorSidebarAtom } from '../atoms/sideBarAtoms';

import {
  getTopRegionRequests,
  getTopBusStops,
  getRouteDistances,
} from '../api/operatorApi';
import type {
  TopRegionItem,
  TopBusStopItem,
  RouteDistanceItem,
} from '../types/operatorType';

import MainTitle from '../components/maintexts/MainTitle';
import SubTitle from '../components/maintexts/SubTitle';
import MainSmallLayout from '../layouts/MainSmalllLayOut';
import SmallChartContainer from '../components/containers/SmallChartContainer';
import BigChartContainer from '../components/containers/BigChartContainer';
import BarChart from '../components/charts/BarChart';

const DataAnalysis = () => {
  const [, setActiveOperator] = useAtom(activeOperatorSidebarAtom);
  const [rankingData, setRankingData] = useState<TopRegionItem[] | null>([]);
  const [topBusStopData, setTopBusStopData] = useState<TopBusStopItem[] | null>(
    []
  );
  const [routeDistanceData, setRouteDistanceData] = useState<
    RouteDistanceItem[] | null
  >([]);

  // 사이드바 활성화 상태 설정
  useEffect(() => {
    setActiveOperator('데이터 분석');
  }, [setActiveOperator]);

  useEffect(() => {
    getTopRegionRequests(1)
      .then(response => {
        setRankingData(response.data.result.items);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:', error);
      });
    getTopBusStops(1)
      .then(response => {
        setTopBusStopData(response.data.result.items);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:', error);
      });
    getRouteDistances(1)
      .then(response => {
        setRouteDistanceData(response.data.result.items);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:', error);
      });
  }, []);

  return (
    <div
      className="overflow-y-scroll h-full w-full min-w-180 flex flex-col"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <MainTitle title="데이터 분석" />
      <SubTitle subTitle="노선별 운행률 및 승객 수요를 조사합니다." />
      <section className="mt-9">
        <div className="mb-2.5">
          <MainTitle title="전체 노선 생성 현황" />
        </div>
        <BigChartContainer>
          <div className="mb-10">
            <SubTitle subTitle="TOP 5 노선 생성 상위 지역 (개)" />
          </div>
          <BarChart
            data={
              rankingData?.map(item => ({
                name: item.areaName,
                value: item.requestCount,
              })) || []
            }
            size="large"
          />
        </BigChartContainer>
      </section>
      <section className="mt-9">
        <MainTitle title="전체 노선 운행 현황" />
        <MainSmallLayout>
          <SmallChartContainer>
            <div className="mb-10">
              <SubTitle subTitle="전체 TOP 5 탑승 정류장 (명)" />
            </div>
            <BarChart
              data={
                topBusStopData?.map(item => ({
                  name: item.stationName,
                  value: item.requestCount,
                })) || []
              }
              size="small"
            />
          </SmallChartContainer>
          <SmallChartContainer>
            <div className="mb-10">
              <SubTitle subTitle="노선별 총 운행거리 비교 (km)" />
            </div>
            <BarChart
              data={
                routeDistanceData?.map(item => ({
                  name: item.routeNo.toString(),
                  value: item.distance,
                })) || []
              }
              size="small"
            />
          </SmallChartContainer>
        </MainSmallLayout>
      </section>
    </div>
  );
};

export default DataAnalysis;
