import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useLocation } from 'react-router-dom';
import { userRoleAtom } from '../atoms/sideBarAtoms';
import LocalSideBar from '../components/sidebars/LocalSideBar';
import OperatorSidebar from '../components/sidebars/OperatorSIdeBar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const [userRole, setUserRole] = useAtom(userRoleAtom);

  // URL 경로를 기반으로 역할 자동 설정
  useEffect(() => {
    if (location.pathname.startsWith('/local')) {
      setUserRole('local');
    } else if (location.pathname.startsWith('/operator')) {
      setUserRole('operator');
    }
  }, [location.pathname, setUserRole]);

  if (!userRole) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="flex p-4 h-screen bg-primary-lighter min-w-0 overflow-hidden">
      {userRole === 'local' ? <LocalSideBar /> : <OperatorSidebar />}
      <section className="px-6 py-8 bg-white flex-1 min-w-0 rounded-[20px] overflow-hidden flex flex-col">
        {children}
      </section>
    </div>
  );
};
export default MainLayout;
