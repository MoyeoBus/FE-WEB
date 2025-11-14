import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { activeLocalSidebarAtom } from '../atoms/sideBarAtoms';
import { reasonMokData, passengerMokData } from '../mokdata';
import MainTitle from '../components/maintexts/MainTitle';
import SubTitle from '../components/maintexts/SubTitle';
import MainSmallLayout from '../layouts/MainSmalllLayOut';
import SmallChartContainer from '../components/containers/SmallChartContainer';
import LocalTimeCalendar from '../components/charts/LocalTimeCalendar';
import LocalLine from '../components/charts/LocalLine';
import Pie from '../components/charts/Pie';

const PassengerStatus = () => {
  const [, setActiveLocal] = useAtom(activeLocalSidebarAtom);
  useEffect(() => {
    setActiveLocal('이용객 현황');
  }, [setActiveLocal]);

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
        <MainSmallLayout>
          <SmallChartContainer>
            <div className="mb-10">
              <SubTitle subTitle="이용객 분포 (명)" />
            </div>
            <Pie data={passengerMokData} />
          </SmallChartContainer>
          <SmallChartContainer>
            <div className="mb-10">
              <SubTitle subTitle="노선 개설 이유 설문 (명)" />
            </div>
            <Pie data={reasonMokData} />
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
