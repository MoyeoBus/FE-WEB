import {
  topRoute,
  topBusStop,
  routeDistanceData,
  reasonMokData,
} from '../mokdata';

import MainTitle from '../components/maintexts/MainTitle';
import SubTitle from '../components/maintexts/SubTitle';
import MainSmallLayout from '../layouts/MainSmalllLayOut';
import SmallChartContainer from '../components/containers/SmallChartContainer';
import BarChart from '../components/charts/BarChart';
import OperatorPie from '../components/charts/OperatorPie';

const DataAnalysis = () => {
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
        <MainTitle title="전체 노선 생성 현황" />
        <MainSmallLayout>
          <SmallChartContainer>
            <div className="mb-10">
              <SubTitle subTitle="노선 생성 상위 지역 (개)" />
            </div>
            <BarChart data={topRoute} size="small" />
          </SmallChartContainer>
          <SmallChartContainer>
            <div className="mb-10">
              <SubTitle subTitle="노선 개설 이유 설문 (명)" />
            </div>
            <OperatorPie data={reasonMokData} />
          </SmallChartContainer>
        </MainSmallLayout>
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
