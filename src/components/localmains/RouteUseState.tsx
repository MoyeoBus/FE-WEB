import { useAtom } from 'jotai';
import {
  graphOptions,
  destinatoinBarChartData,
  routeUseStateData,
  departureBarChartData,
} from '../../atoms/localAtoms';

import {
  getLocalRouteDestinationStats,
  getLocalRouteDepartureStats,
} from '../../api/localApi';

const LocalTable = () => {
  const [, setIsGraphOptions] = useAtom(graphOptions);
  const [busData] = useAtom(routeUseStateData);

  const [, setDestinationBarData] = useAtom(destinatoinBarChartData);
  const [, setDepartureBarData] = useAtom(departureBarChartData);

  const handleGraphClick = async (id: number) => {
    await getLocalRouteDestinationStats(id)
      .then(response => {
        setDestinationBarData(response.data.result.items);
      })
      .catch(error => {
        console.error(
          '노선별 목적지 도착지 기준 요청 통계 데이터 가져오기 실패:',
          error
        );
      });
    await getLocalRouteDepartureStats(id)
      .then(response => {
        setDepartureBarData(response.data.result.items);
      })
      .catch(error => {
        console.error(
          '노선별 출발지 기준 요청 통계 데이터 가져오기 실패:',
          error
        );
      });
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
          {busData && busData.length > 0 ? (
            <tbody className="text-gray-800">
              {busData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                    {item.routeId}노선
                  </td>
                  <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                    {item.stationCount}개
                  </td>
                  <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                    {item.peopleCount}명
                  </td>
                  <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                    {item.distance}km
                  </td>
                  <td
                    className="py-3 px-4 text-grayscale-lighter underline cursor-pointer"
                    onClick={() => handleGraphClick(item.routeId)}
                  >
                    그래프
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <div className="absolute bottom-1/2 left-1/2 transform typo-h2 text-gray-500">
              데이터가 없습니다.
            </div>
          )}
        </table>
      </div>
    </div>
  );
};

export default LocalTable;
