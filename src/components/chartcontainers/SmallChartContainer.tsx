import type { ReactNode } from 'react';

interface SmallChartContainerProps {
  children: ReactNode;
}

const SmallChartContainer = ({ children }: SmallChartContainerProps) => {
  return (
    <div
      className="flex-1 min-w-0 h-96 rounded-[10px] border border-gray-300 overflow-hidden py-4 px-10 overflow-y-scroll"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {children}
    </div>
  );
};
export default SmallChartContainer;
