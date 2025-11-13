import MainTitle from '../components/maintexts/MainTitle';
import SubTitle from '../components/maintexts/SubTitle';
import OperatorPathFind from '../operatormains/OperatorPathFind';

const OperationManagement = () => {
  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <div className="shrink-0">
        <MainTitle title="운행 관리" />
        <SubTitle subTitle="실시간 운행 현황과 경로를 관리하세요." />
      </div>
      <div className="flex-1 min-h-0 mt-2.5">
        <OperatorPathFind />
      </div>
    </div>
  );
};

export default OperationManagement;
