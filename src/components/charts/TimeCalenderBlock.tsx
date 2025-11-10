import { useState } from 'react';

interface TimeCalenderBlockProps {
  value: number;
  day: string;
}

const TimeCalenderBlock = ({ value, day }: TimeCalenderBlockProps) => {
  const [hover, setHover] = useState(false);

  let color = 'bg-[#B3D8FF]';
  if (value >= 40 && value <= 100) {
    color = 'bg-[#66B0FF]';
  } else if (value > 100) {
    color = 'bg-[#007CFF]';
  }

  return (
    <div
      className="relative inline-block w-full h-full rounded cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`${color} w-full h-full rounded`}></div>

      {/* 툴팁 */}
      {hover && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-10">
          {day}: {value}
        </div>
      )}
    </div>
  );
};

export default TimeCalenderBlock;
