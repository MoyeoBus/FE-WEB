import downbtn from '../../assets/local/downbtn.svg';

interface DownLoadBtnProps {
  name: string;
}

const DownLoadBtn = ({ name }: DownLoadBtnProps) => {
  return (
    <button className="flex justify-between px-2.5 items-center typo-table text-base-black w-36 h-8 rounded-md border border-gray-300 hover:cursor-pointer">
      {name}
      <img className="w-3.5 h-3" src={downbtn} alt="다운로드 버튼" />
    </button>
  );
};

export default DownLoadBtn;
