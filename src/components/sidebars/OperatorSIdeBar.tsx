import LogoTitle from './LogoTitle';
import SideBtn from './SideBtn';
import graph from '../../assets/sidebar/graph.svg';
import map from '../../assets/sidebar/map.svg';
import setting from '../../assets/sidebar/setting.svg';

const operatorSide: { name: string; clickTo: string; img: string }[] = [
  { name: '데이터 분석', clickTo: '/', img: graph },
  { name: '운행 관리', clickTo: '/', img: map },
  { name: '계정 관리', clickTo: '/', img: setting },
];

const OperatorSidebar = () => {
  return (
    <div className="w-55 py-7 flex flex-col justify-start">
      <LogoTitle />
      {operatorSide.map(data => (
        <div key={data.name}>
          <SideBtn btnName={data.name} clickTo={data.clickTo} img={data.img} />
        </div>
      ))}
    </div>
  );
};

export default OperatorSidebar;
