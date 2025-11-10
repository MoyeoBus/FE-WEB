import MainTitle from '../components/maintexts/MainTitle';
import SubTitle from '../components/maintexts/SubTitle';
import DownLoadBtn from '../components/localmains/DownLoadBtn';
import DropDownSelect from '../components/localmains/DropDownSelect';
import RouteUseState from '../components/localmains/RouteUseState';
import BigChartContainer from '../components/chartcontainers/BigChartContainer';
import BarChart from '../components/charts/BarChart';

const routeName = '107번';

const RouteStatus = () => {
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
          <DownLoadBtn name="svg 파일 다운로드" />
          <DownLoadBtn name="xlsx 파일 다운로드" />
          <span className="ml-2.5">
            <DropDownSelect />
          </span>
        </div>
      </section>
      <RouteUseState />
      <section className="mt-7.5">
        <div className="mb-2.5">
          <MainTitle title="도착지 빈도 분석" />
        </div>
        <BigChartContainer>
          <div className="mb-10">
            <SubTitle subTitle={`${routeName} 노선`} />
          </div>
          <BarChart />
        </BigChartContainer>
      </section>
    </div>
  );
};

export default RouteStatus;
