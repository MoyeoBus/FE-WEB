import { ResponsivePie } from '@nivo/pie';
import { useAtom } from 'jotai';
import { passengerData, pieColor } from '../../atoms/localAtoms';

const LocalPie = () => {
  const [data] = useAtom(passengerData);
  const [color] = useAtom(pieColor);

  return (
    <ResponsivePie /* or Pie for fixed dimensions */
      data={data}
      startAngle={360}
      endAngle={0}
      margin={{ top: 25, bottom: 25, right: 25, left: 25 }}
      activeOuterRadiusOffset={8} // hover시 얼마나 뜨는지
      arcLabelsSkipAngle={10}
      colors={color}
      enableArcLabels={false}
      enableArcLinkLabels={false}
    />
  );
};

export default LocalPie;
