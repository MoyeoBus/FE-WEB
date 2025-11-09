import type { ReactNode } from 'react';

interface SmallChartContainerProps {
  children: ReactNode;
}

const SmallChartContainer = ({ children }: SmallChartContainerProps) => {
  return (
    <div className="flex-1 h-96 rounded-[10px] border border-gray-300">
      {children}
    </div>
  );
};

export default SmallChartContainer;
