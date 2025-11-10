import { useState, useEffect, useRef } from 'react';
import underarrow from '../../assets/local/underarrow.svg';

const DropDownSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [selectedOption, setSelectedOption] = useState<string>('이용 횟수');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <span ref={dropdownRef} className="relative">
      <div
        className="flex justify-between text-base-black items-center px-2.5 w-26 h-8 rounded-md outline -outline-offset-1 outline-gray-300 hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        정렬
        <img
          src={underarrow}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          alt="정렬 화살표"
        />
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-26 bg-white outline -outline-offset-1 outline-gray-300 rounded-md shadow-lg z-10">
          <div
            className={`px-2.5 py-1.5 hover:bg-gray-100 hover:cursor-pointer hover:rounded-t-md typo-table typo-table-black₩ ${selectedOption === '이용 횟수' ? 'bg-gray-100' : ''}`}
            onClick={() => {
              setSelectedOption('이용 횟수');
              setIsOpen(false);
            }}
          >
            이용 횟수
          </div>
          <div
            className={`px-2.5 py-1.5 hover:bg-gray-100 hover:cursor-pointer hover:rounded-b-md typo-table typo-table-black ${selectedOption === '거리' ? 'bg-gray-100' : ''}`}
            onClick={() => {
              setSelectedOption('거리');
              setIsOpen(false);
            }}
          >
            거리
          </div>
        </div>
      )}
    </span>
  );
};

export default DropDownSelect;
