import Bar from '../charts/Bar';

const data = [
  { value: 190, name: '완산체육관' },
  { value: 70, name: '진안의료원' },
  { value: 30, name: '덕진공원' },
  { value: 50, name: '전주역' },
  { value: 50, name: '전주역' },
  { value: 50, name: '전주역' },
  { value: 50, name: '전주역' },
  { value: 50, name: '전주역' },
  { value: 50, name: '전주역' },
];

const colors = ['#FD7E14', '#4DA4FF', '#66B0FF']; // 상위 3 색상
const defaultColor = '#BDBEBF'; // 나머지 회색

const BarChart = () => {
  const maxValue = Math.max(...data.map(item => item.value));

  // 값 기준 내림차순 정렬해서 색상 매칭
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  return (
    <div className="w-full gap-3 flex flex-col">
      {sortedData.map((item, index) => (
        <div key={item.name} className="flex items-center gap-2.5">
          <span className="w-32 typo-table">{item.name}</span>
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
