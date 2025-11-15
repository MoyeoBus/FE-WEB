import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { activeOperatorSidebarAtom } from '../atoms/sideBarAtoms';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import MainTitle from '../components/maintexts/MainTitle';
import SubTitle from '../components/maintexts/SubTitle';

const OperationManagement = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [, setActiveOperator] = useAtom(activeOperatorSidebarAtom);

  // 사이드바 활성화 상태 설정
  useEffect(() => {
    setActiveOperator('운행 관리');
  }, [setActiveOperator]);

  const handleGoBack = () => {
    navigate('/operator/operationManagement');
  };

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <div className="shrink-0 flex items-center justify-between">
        <section>
          <MainTitle title="운행 관리" />
          <SubTitle subTitle="실시간 운행 현황과 경로를 관리하세요." />
        </section>
        {(location.pathname === '/operator/operationManagement/pathFind' ||
          location.pathname === '/operator/operationManagement/pastPath') && (
          <button
            className="typo-h2 hover:cursor-pointer"
            onClick={handleGoBack}
          >
            돌아가기
          </button>
        )}
      </div>
      <div className="flex-1 min-h-0 mt-2.5">
        <Outlet />
      </div>
    </div>
  );
};

export default OperationManagement;
