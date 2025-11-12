import { useState, useEffect, useRef } from 'react';
import { useAtom } from 'jotai';
import { routeUseStateData } from '../../atoms/localAtoms';
import underarrow from '../../assets/local/underarrow.svg';

const DropDownSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [selectedOption, setSelectedOption] = useState<string>('승객수');

  const [busData, setBusData] = useAtom(routeUseStateData);

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

  const sortData = (option: string) => {
    const sortedData = [...busData];
    if (option === '승객수') {
      sortedData.sort((a, b) => b.people - a.people);
    } else if (option === '거리') {
      sortedData.sort((a, b) => b.distance - a.distance);
    } else if (option === '정류장 수') {
      sortedData.sort((a, b) => b.buStopCount - a.buStopCount);
    }
    setBusData(sortedData);
  };

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
            className={`px-2.5 py-1.5 hover:bg-gray-100 hover:cursor-pointer hover:rounded-t-md typo-table typo-table-black ${selectedOption === '승객수' ? 'bg-gray-100' : ''}`}
            onClick={() => {
              sortData('승객수');
              setSelectedOption('승객수');
              setIsOpen(false);
            }}
          >
            승객수
          </div>
          <div
            className={`px-2.5 py-1.5 hover:bg-gray-100 hover:cursor-pointer hover:rounded-b-md typo-table typo-table-black ${selectedOption === '정류장 수' ? 'bg-gray-100' : ''}`}
            onClick={() => {
              sortData('정류장 수');
              setSelectedOption('정류장 수');
              setIsOpen(false);
            }}
          >
            정류장 수
          </div>
          <div
            className={`px-2.5 py-1.5 hover:bg-gray-100 hover:cursor-pointer hover:rounded-b-md typo-table typo-table-black ${selectedOption === '거리' ? 'bg-gray-100' : ''}`}
            onClick={() => {
              sortData('거리');
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
