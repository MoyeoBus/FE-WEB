import type { ReactNode } from 'react';

interface MiniTextContainerProps {
  children: ReactNode;
}

const MiniTextsLayOut = ({ children }: MiniTextContainerProps) => {
  return <div className="w-full flex justify-between gap-4">{children}</div>;
};

export default MiniTextsLayOut;
