import type { ReactNode } from 'react';

interface BigChartContainerProps {
  children: ReactNode;
}

const BigChartContainer = ({ children }: BigChartContainerProps) => {
  return (
    <div
      className="w-full h-96 rounded-[10px] border border-gray-300 overflow-y-scroll py-4.5 px-7"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {children}
    </div>
  );
};

export default BigChartContainer;
