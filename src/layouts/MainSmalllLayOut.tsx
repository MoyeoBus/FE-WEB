import type { ReactNode } from 'react';

interface MainSmallLayoutProps {
  children: ReactNode;
}

const MainSmallLayout = ({ children }: MainSmallLayoutProps) => {
  return <div className="flex w-full h-full gap-6 mt-2">{children}</div>;
};

export default MainSmallLayout;
