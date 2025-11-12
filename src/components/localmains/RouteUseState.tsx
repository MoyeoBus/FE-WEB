import { useAtom } from 'jotai';
import { graphOptions } from '../../atoms/localAtoms';
import { routeUseStateData } from '../../atoms/localAtoms';

const LocalTable = () => {
  const [, setIsGraphOptions] = useAtom(graphOptions);
  const [busData] = useAtom(routeUseStateData);

  const handleGraphClick = () => {
    setIsGraphOptions(true);
  };

  return (
    <div className="mx-auto w-full h-85 border border-gray-300 rounded-lg overflow-hidden">
      {/* 스크롤 영역 */}
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
                노선명
              </th>
              <th className="py-3 px-4 typo-table typo-base-black border-r border-gray-300">
                정류장 수
              </th>
              <th className="py-3 px-4 typo-table typo-base-black border-r border-gray-300">
                승객수
              </th>
              <th className="py-3 px-4 typo-table typo-base-black border-r border-gray-300">
                거리
              </th>
              <th className="py-3 px-4 typo-table typo-base-black">상세</th>
            </tr>
          </thead>

          {/* 데이터 영역 */}
          <tbody className="text-gray-800">
            {busData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                  {item.line}
                </td>
                <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                  {item.buStopCount}개
                </td>
                <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                  {item.people}명
                </td>
                <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                  {item.distance}km
                </td>
                <td
                  className="py-3 px-4 text-grayscale-lighter underline cursor-pointer"
                  onClick={handleGraphClick}
                >
                  그래프
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LocalTable;
