const TimeCalenderLegend = () => {
  const values: { color: string; label: string }[] = [
    { color: 'bg-[#B3D8FF]', label: '<40' },
    { color: 'bg-[#66B0FF]', label: '40-100' },
    { color: 'bg-[#007CFF]', label: '>100' },
  ];
  return (
    <div className="flex">
      {values.map(item => (
        <div key={item.label} className={`flex items-center mr-4`}>
          <div className="flex flex-col items-center">
            <span className="text-table text-grayscale">{item.label}</span>
            <div className={`w-14 h-3 rounded ${item.color} mr-1`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeCalenderLegend;
