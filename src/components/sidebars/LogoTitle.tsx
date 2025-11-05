import busLogo from '../../assets/logo/busLogo.svg';
import { useNavigate } from 'react-router-dom';

const LogoTitle = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // 로고 클릭 시 홈으로 이동하는 기능 구현
    // 추후에 여기에 지자체인지 운수사인지 확인하는 것을 통해 이동 경로를 다르게 설정해야 함
    navigate('/');
  };

  return (
    <div
      className="flex items-center gap-1 hover:cursor-pointer mb-15"
      onClick={handleClick}
    >
      <img src={busLogo} alt="모여버스 로고 아이콘" className="w-12 h-12" />
      <h1 className="typo-h2 font-bold">모여버스</h1>
    </div>
  );
};

export default LogoTitle;
