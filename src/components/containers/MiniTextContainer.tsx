import MainTitle from '../maintexts/MainTitle';
import SubTitle from '../maintexts/SubTitle';

interface MiniTextContainerProps {
  name: string;
  value: string | number;
}

const MiniTextContainer = ({ name, value }: MiniTextContainerProps) => {
  return (
    <div className="mt-2.5 px-6 py-3.5 flex flex-col justify-start w-full min-w-53 h-24 rounded-[10px] border border-gray-300">
      <SubTitle subTitle={name} />
      <MainTitle title={value} />
    </div>
  );
};

export default MiniTextContainer;
