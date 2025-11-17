import { ResponsivePie } from '@nivo/pie';
import { useAtom } from 'jotai';
import { pieColor } from '../../atoms/localAtoms';

type PieDataProp = {
  name: string;
  count: number;
  ratio: string;
};
interface OperatorPieProps {
  data: PieDataProp[];
}
const OperatorPie = ({ data }: OperatorPieProps) => {
  const [color] = useAtom(pieColor);

  // Nivo가 기대하는 형태로 데이터 변환
  const transformedData = data.map((item, index) => ({
    id: item.name,
    label: item.name,
    value: item.count,
    ratio: item.ratio,
    color: color[index % color.length],
  }));

  // 데이터가 없거나 비어있을 때 처리
  if (!data || data.length === 0) {
    return (
      <div className="flex justify-around items-center">
        <section className="w-60 h-60 flex items-center justify-center">
          <span className="typo-table text-grayscale">데이터가 없습니다</span>
        </section>
      </div>
    );
  }

  // 긴 텍스트를 줄이는 함수
  const truncate = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '…';
  };

  return (
    <div className="flex justify-around items-center">
      <section className="w-60 h-60">
        <ResponsivePie
          data={transformedData}
          startAngle={360}
          endAngle={0}
          margin={{ top: 10, bottom: 10, right: 10, left: 10 }}
          activeOuterRadiusOffset={8} // hover시 얼마나 뜨는지
          arcLabelsSkipAngle={10}
          colors={transformedData.map(d => d.color)}
          enableArcLinkLabels={false}
          arcLabel={d => truncate(String(d.id), 5)}
          arcLabelsTextColor="#FFFFFF"
        />
      </section>
      <section>
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-3 mt-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color[index % color.length] }}
            ></div>
            <span className="typo-table text-grayscale">{item.name}</span>
            <span className="typo-table text-grayscale">{item.ratio}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OperatorPie;
