import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useAtom } from 'jotai';
import { routeUseStateData } from '../../atoms/localAtoms';
import downbtn from '../../assets/local/downbtn.svg';

interface DownLoadBtnProps {
  name: 'csv' | 'xlsx';
}

const DownLoadBtn = ({ name }: DownLoadBtnProps) => {
  const [busData] = useAtom(routeUseStateData);

  //XLSX 다운로드 함수
  const downloadXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(busData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Bus Data');
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'bus_route_data.xlsx');
  };

  //CSV 다운로드 함수
  const downloadCSV = () => {
    // XLSX 유틸을 그대로 사용해도 깔끔합니다
    const worksheet = XLSX.utils.json_to_sheet(busData);
    const csv = XLSX.utils.sheet_to_csv(worksheet);

    // 한글 깨짐 방지를 위해 BOM 추가
    const csvWithBOM = '\uFEFF' + csv;
    const blob = new Blob([csvWithBOM], {
      type: 'text/csv;charset=utf-8;',
    });
    saveAs(blob, 'bus_route_data.csv');
  };

  const handleDownload = () => {
    if (name === 'csv') {
      downloadCSV();
    } else {
      downloadXLSX();
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="flex justify-between px-2.5 items-center typo-table text-base-black w-36 h-8 rounded-md border border-gray-300 hover:cursor-pointer hover:bg-gray-50 transition"
    >
      {name} 파일 다운로드
      <img className="w-3.5 h-3" src={downbtn} alt="다운로드 버튼" />
    </button>
  );
};

export default DownLoadBtn;
