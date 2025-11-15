import { pathData } from '../mokdata';
import MiniTextsLayOut from '../layouts/MiniTextsLayOut';
import MiniTextContainer from '../components/containers/MiniTextContainer';
import MainTitle from '../components/maintexts/MainTitle';
import PathListTable from './PathListTable';

const OperatorPathList = () => {
  const inputData = {
    todayCount: 7,
    pathCount: 88,
    finished: 88,
  };

  return (
    <div className="w-full h-full flex flex-col gap-3 min-h-0">
      <MiniTextsLayOut>
        <MiniTextContainer
          name="오늘 운행"
          value={inputData.todayCount + ' 건'}
        />
        <MiniTextContainer
          name="배차 건수"
          value={inputData.pathCount + ' 건'}
        />
        <MiniTextContainer
          name="탑승 완료"
          value={inputData.finished + ' 건'}
        />
      </MiniTextsLayOut>
      <section className="mt-6.5">
        <div className="mb-2.5">
          <MainTitle title="운행 이력 및 실시간 위치 조회" />
        </div>
        <PathListTable pathData={pathData} />
      </section>
    </div>
  );
};

export default OperatorPathList;
