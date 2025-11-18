import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { activeLocalSidebarAtom } from '../atoms/sideBarAtoms';
import {
  destinatoinBarChartData,
  graphOptions,
  routeUseStateData,
  departureBarChartData,
} from '../atoms/localAtoms';

import { getLocalRouteUsage } from '../api/localApi';

import MainTitle from '../components/maintexts/MainTitle';
import SubTitle from '../components/maintexts/SubTitle';
import DownLoadBtn from '../components/localmains/DownLoadBtn';
import DropDownSelect from '../components/localmains/DropDownSelect';
import RouteUseState from '../components/localmains/RouteUseState';
import BarChart from '../components/charts/BarChart';
import SmallChartContainer from '../components/containers/SmallChartContainer';
import MainSmallLayout from '../layouts/MainSmalllLayOut';

const RouteStatus = () => {
  const [destinationBarData] = useAtom(destinatoinBarChartData);
  const [departureBarData] = useAtom(departureBarChartData);
  const [isGraphOptions, setIsGraphOptions] = useAtom(graphOptions);
  const [routeUseState, setRouteUseState] = useAtom(routeUseStateData);

  const [, setActiveLocal] = useAtom(activeLocalSidebarAtom);
  useEffect(() => {
    setActiveLocal('노선 현황');
  }, [setActiveLocal]);

  useEffect(() => {
    getLocalRouteUsage(1)
      .then(response => {
        setRouteUseState(response.data.result.items);
      })
      .catch(error => {
        console.error('노선별 통계 데이터 가져오기 실패:', error);
      });
  }, [setRouteUseState]);

  console.log(routeUseState);

  return (
    <div
      className="overflow-y-scroll w-full min-w-180 flex flex-col"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <MainTitle title="노선 현황" />
      <SubTitle subTitle="노선별 운행률 및 승객 수요를 조사합니다." />
      <section className="mt-9 mb-2.5 flex justify-between items-center">
        <MainTitle title="노선별 이용 통계" />
        <div className="flex gap-2.5">
          <DownLoadBtn name="csv" />
          <DownLoadBtn name="xlsx" />
          <span className="ml-2.5">
            <DropDownSelect />
          </span>
        </div>
      </section>
      <RouteUseState />
      {isGraphOptions && (
        <section className="mt-7.5">
          <div className="mb-2.5 flex justify-between items-center px-2.5">
            <MainTitle
              title={`${routeUseState?.[0]?.routeId} 노선 빈도 분석`}
            />
            <button
              className="typo-table text-grayscale hover:cursor-pointer"
              onClick={() => setIsGraphOptions(false)}
            >
              닫기
            </button>
          </div>
          <MainSmallLayout>
            <SmallChartContainer>
              <div className="mb-10 flex justify-between items-center">
                <SubTitle subTitle="출발지 빈도 분석" />
              </div>
              <BarChart
                data={
                  departureBarData?.map(item => ({
                    name: String(item.stationName),
                    value: item.count,
                  })) || []
                }
                size="small"
              />
            </SmallChartContainer>
            <SmallChartContainer>
              <div className="mb-10 flex justify-between items-center">
                <SubTitle subTitle="도착지 빈도 분석" />
              </div>
              <BarChart
                data={
                  destinationBarData?.map(item => ({
                    name: String(item.stationName),
                    value: item.count,
                  })) || []
                }
                size="small"
              />
            </SmallChartContainer>
          </MainSmallLayout>
        </section>
      )}
    </div>
  );
};
//바차트에 사이즈를 받아서 크기 조절이 필요함
export default RouteStatus;
