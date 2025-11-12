import Bar from '../charts/Bar';

const colors = ['#FD7E14', '#4DA4FF', '#66B0FF']; // 상위 3 색상
const defaultColor = '#BDBEBF'; // 나머지 회색

interface BarChartProps {
  data: { name: string; value: number }[];
  size: 'large' | 'small';
}

const BarChart = ({ data, size }: BarChartProps) => {
  const maxValue = Math.max(...data.map(item => item.value));

  // 값 기준 내림차순 정렬해서 색상 매칭
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  let widthOfName = 'w-32';

  if (size === 'small') {
    widthOfName = 'w-24';
  }

  return (
    <div className="w-full gap-3 flex flex-col">
      {sortedData.map((item, index) => (
        <div key={item.name} className="flex items-center gap-2.5">
          <span className={`${widthOfName} typo-table`}>{item.name}</span>
          <Bar
            value={item.value}
            maxValue={maxValue}
            color={index < colors.length ? colors[index] : defaultColor}
          />
          <span className="ml-6 typo-table">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
