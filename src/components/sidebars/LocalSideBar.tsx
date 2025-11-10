import LogoTitle from './LogoTitle';
import SideBtn from './SideBtn';
import compass from '../../assets/sidebar/compass.svg';
import graph from '../../assets/sidebar/graph.svg';
import setting from '../../assets/sidebar/setting.svg';

const localSide: { name: string; clickTo: string; img: string }[] = [
  { name: '이용객 현황', clickTo: '/local/PassengerStatus', img: compass },
  { name: '노선 현황', clickTo: '/local/RouteStatus', img: graph },
  { name: '계정 관리', clickTo: '/', img: setting },
];

const LocalSideBar = () => {
  return (
    <div className="w-55 py-7 flex flex-col justify-start">
      <LogoTitle />
      {localSide.map(data => (
        <div key={data.name}>
          <SideBtn btnName={data.name} clickTo={data.clickTo} img={data.img} />
        </div>
      ))}
    </div>
  );
};

export default LocalSideBar;
