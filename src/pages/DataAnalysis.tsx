import { topRoute, topBusStop, routeDistanceData } from '../mokdata';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { activeOperatorSidebarAtom } from '../atoms/sideBarAtoms';
import MainTitle from '../components/maintexts/MainTitle';
import SubTitle from '../components/maintexts/SubTitle';
import MainSmallLayout from '../layouts/MainSmalllLayOut';
import SmallChartContainer from '../components/containers/SmallChartContainer';
import BigChartContainer from '../components/containers/BigChartContainer';
import BarChart from '../components/charts/BarChart';

const DataAnalysis = () => {
  const [, setActiveOperator] = useAtom(activeOperatorSidebarAtom);

  // 사이드바 활성화 상태 설정
  useEffect(() => {
    setActiveOperator('데이터 분석');
  }, [setActiveOperator]);

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
            <SubTitle subTitle="노선 생성 상위 지역 (개)" />
          </div>
          <BarChart data={topRoute} size="large" />
        </BigChartContainer>
      </section>
      <section className="mt-9">
        <MainTitle title="전체 노선 운행 현황" />
        <MainSmallLayout>
          <SmallChartContainer>
            <div className="mb-10">
              <SubTitle subTitle="전체 상위 탑승 정류장 (명)" />
            </div>
            <BarChart data={topBusStop} size="small" />
          </SmallChartContainer>
          <SmallChartContainer>
            <div className="mb-10">
              <SubTitle subTitle="노선별 총 운행거리 비교 (km)" />
            </div>
            <BarChart data={routeDistanceData} size="small" />
          </SmallChartContainer>
        </MainSmallLayout>
      </section>
    </div>
  );
};

export default DataAnalysis;
