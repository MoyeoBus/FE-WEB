interface BarProps {
  value: number;
  maxValue: number;
  color: string;
}

const Bar = ({ value, maxValue, color }: BarProps) => {
  const width = (value / maxValue) * 70; // 최대값 기준 70%
  return (
    <div
      style={{
        width: `${width}%`,
        backgroundColor: color,
        height: '40px',
      }}
    />
  );
};

export default Bar;
