import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import {
  activeLocalSidebarAtom,
  activeOperatorSidebarAtom,
  userRoleAtom,
} from '../../atoms/sideBarAtoms';

interface SideBtnProps {
  btnName: string;
  clickTo: string;
  img: string;
}

const SideBtn = ({ btnName, clickTo, img }: SideBtnProps) => {
  //전역 상태값
  const [userRole] = useAtom(userRoleAtom);
  const [activeLocal, setActiveLocal] = useAtom(activeLocalSidebarAtom);
  const [activeOperator, setActiveOperator] = useAtom(
    activeOperatorSidebarAtom
  );

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(clickTo);
    if (userRole === 'local') {
      setActiveLocal(btnName);
    } else if (userRole === 'operator') {
      setActiveOperator(btnName);
    }
  };

  const isActive =
    (userRole === 'local' && activeLocal === btnName) ||
    (userRole === 'operator' && activeOperator === btnName);

  return (
    <button
      className={`w-46 h-12 typo-h2 flex items-center justify-start gap-3 px-5.5 rounded-[10px] hover:cursor-pointer ${isActive ? 'bg-primary text-base-white' : 'text-grayscale'}`}
      onClick={handleClick}
    >
      <img
        className="w-3.5 h-3.5"
        src={img}
        alt="사이드바 아이콘"
        style={
          isActive
            ? { filter: 'invert(1)' }
            : { filter: 'grayscale(1)', opacity: 0.5 }
        }
      />
      {btnName}
    </button>
  );
};

export default SideBtn;
