import LocalPie from '../components/charts/LocalPie';
import MainTitle from '../components/maintexts/MainTitle';
import SubTitle from '../components/maintexts/SubTitle';
import LocalPieLegend from '../components/localmains/LocalPieLegend';
import MainSmallLayout from '../layouts/MainSmalllLayOut';
import SmallChartContainer from '../components/chartcontainers/SmallChartContainer';
import LocalTimeCalendar from '../components/charts/LocalTimeCalendar';
import LocalLine from '../components/charts/LocalLine';

const PassengerStatus = () => {
  const local = '진안군';
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
        <section className="w-full min-w-20 h-90 rounded-[10px] border border-gray-300 mt-2 flex justify-center items-center gap-25">
          <div className="max-w-90 w-90 h-90">
            <LocalPie />
          </div>
          <div className="max-w-40 w-40 h-90">
            <LocalPieLegend />
          </div>
        </section>
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
