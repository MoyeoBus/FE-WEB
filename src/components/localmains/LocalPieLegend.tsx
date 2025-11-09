import { useAtom } from 'jotai';
import { passengerData, pieColor } from '../../atoms/localAtoms';

const LocalPieLegend = () => {
  // useAtom returns [value, setter]
  const [color] = useAtom(pieColor);
  const [data] = useAtom(passengerData);

  return (
    <div className="flex flex-col gap-3 h-full justify-center">
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-5">
          <div
            className="w-6 h-6 rounded-xl"
            style={{ backgroundColor: color[index] }}
          />
          <div className="typo-body text-base-black">
            {item.label} {item.persent}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocalPieLegend;
