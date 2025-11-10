import type { ReactNode } from 'react';
import { useAtom } from 'jotai';
import { userRoleAtom } from '../atoms/sideBarAtoms';
import LocalSideBar from '../components/sidebars/LocalSideBar';
import OperatorSidebar from '../components/sidebars/OperatorSIdeBar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [userRole] = useAtom(userRoleAtom);

  if (!userRole) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="flex p-4 h-screen bg-primary-lighter min-w-0 overflow-hidden">
      {userRole === 'local' ? <LocalSideBar /> : <OperatorSidebar />}
      <section
        className="px-6 py-8 bg-white flex-1 min-w-0 rounded-[20px] overflow-scroll"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </section>
    </div>
  );
};
export default MainLayout;
