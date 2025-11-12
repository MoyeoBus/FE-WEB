import { ResponsivePie } from '@nivo/pie';
import { useAtom } from 'jotai';
import { pieColor } from '../../atoms/localAtoms';

type PieDataProp = {
  id: string;
  label: string;
  value: number;
  persent: string;
};
interface OperatorPieProps {
  data: PieDataProp[];
}
const OperatorPie = ({ data }: OperatorPieProps) => {
  const [color] = useAtom(pieColor);

  return (
    <div className="flex justify-around items-center">
      <section className="w-60 h-60">
        <ResponsivePie /* or Pie for fixed dimensions */
          data={data}
          startAngle={360}
          endAngle={0}
          margin={{ top: 10, bottom: 10, right: 10, left: 10 }}
          activeOuterRadiusOffset={8} // hover시 얼마나 뜨는지
          arcLabelsSkipAngle={10}
          colors={color}
          enableArcLinkLabels={false}
          arcLabel={d => `${d.id}`}
          arcLabelsTextColor="#FFFFFF"
        />
      </section>
      <section>
        {data.map(item => (
          <div key={item.id} className="flex items-center gap-3 mt-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color[data.indexOf(item)] }}
            ></div>
            <span className="typo-table text-grayscale">{item.label}</span>
            <span className="typo-table text-grayscale">{item.persent}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OperatorPie;
