const busData = [
  { line: '107번', buStopCount: '18개', people: '19명', distance: '98km' },
  { line: '106번', buStopCount: '24개', people: '27명', distance: '112km' },
  { line: '105번', buStopCount: '20개', people: '23명', distance: '120km' },
  { line: '104번', buStopCount: '16개', people: '15명', distance: '87km' },
  { line: '103번', buStopCount: '29개', people: '31명', distance: '135km' },
  { line: '102번', buStopCount: '14개', people: '12명', distance: '75km' },
];

const LocalTable = () => {
  return (
    <div className="mx-auto w-full h-87 border border-gray-300 rounded-lg overflow-hidden">
      {/* 스크롤 영역 */}
      <div
        className="h-full overflow-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <table className="min-w-full min-h-full border-collapse text-center">
          {/* ✅ 헤더 고정 */}
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

          {/* ✅ 데이터 영역 */}
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
                  {item.buStopCount}
                </td>
                <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                  {item.people}
                </td>
                <td className="py-3 px-4 border-r typo-table text-base-black border-gray-300">
                  {item.distance}
                </td>
                <td className="py-3 px-4 text-grayscale-lighter underline cursor-pointer">
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
