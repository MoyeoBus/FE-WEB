import { useNavigate } from 'react-router-dom';

type PathData = {
  line: number;
  pathInfo: string;
  driver: string;
  status: string;
  extraInfo: string;
};

const PathListTable = ({ pathData }: { pathData: PathData[] }) => {
  const navigate = useNavigate();

  const handleStatusClick = (status: string) => {
    if (status === '추적') {
      navigate('/operator/operationManagement/pathFind');
    } else {
      navigate('/operator/operationManagement/pastPath');
    }
  };

  return (
    <div className="mx-auto w-full h-85 border border-gray-300 rounded-lg overflow-hidden">
      <div
        className="h-full overflow-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <table className="min-w-full min-h-full border-collapse text-center">
          {/* 헤더 고정 */}
          <thead className="bg-gray-50 sticky top-0 z-9">
            <tr className="border-b border-gray-300 text-gray-700">
              <th className="py-3 px-4 typo-table typo-table-black border-r border-gray-300">
                버스 번호
              </th>
              <th className="py-3 px-4 typo-table typo-base-black border-r border-gray-300">
                노선정보
              </th>
              <th className="py-3 px-4 typo-table typo-base-black border-r border-gray-300">
                담당기사
              </th>
              <th className="py-3 px-4 typo-table typo-base-black border-r border-gray-300">
                상태
              </th>
              <th className="py-3 px-4 typo-table typo-base-black">상세</th>
            </tr>
          </thead>
          {/* 데이터 영역 */}
          <tbody className="text-gray-800">
            {pathData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                  {item.line}번
                </td>
                <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                  {item.pathInfo}
                </td>
                <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                  {item.driver}
                </td>
                <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                  {item.status}
                </td>
                <td
                  className="py-3 px-4 text-grayscale-lighter underline cursor-pointer"
                  onClick={() => handleStatusClick(item.extraInfo)}
                >
                  {item.extraInfo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PathListTable;
