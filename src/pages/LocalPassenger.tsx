import LocalPie from '../components/localmains/LocalPie';
import MainTitle from '../components/maintexts/MainTitle';
import SubTitle from '../components/maintexts/SubTitle';
import LocalPieLegend from '../components/localmains/LocalPieLegend';

const LocalPassenger = () => {
  const local = '진안군';
  return (
    <div>
      <MainTitle title="이용객 현황" />
      <SubTitle subTitle="노선별 운행률 및 승객 수요를 조사합니다." />
      <div className="mt-9">
        <MainTitle title={local + ' 이용 현황'} />
        <section className="w-full min-w-20 h-90 rounded-[10px] border border-gray-300 mt-2 flex justify-center items-center gap-25">
          <div className="w-90 h-90">
            <LocalPie />
          </div>
          <div className="w-40 h-90">
            <LocalPieLegend />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LocalPassenger;
