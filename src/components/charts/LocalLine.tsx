import { ResponsiveLine } from '@nivo/line';
import { useState } from 'react';
import SubTitle from '../maintexts/SubTitle';
import { useAtom } from 'jotai';
import { lineData } from '../../atoms/localAtoms';
import { getLocalHourlyUsage } from '../../api/localApi';

const LocalLine = () => {
  const [data, setLine] = useAtom(lineData);

  // 현재 날짜를 기본값으로 사용 (YYYY-MM-DD)
  const today = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(
    today.getDate()
  )}`;
  const [yearMonthDay, setYearMonthDay] = useState<string>(todayStr);

  const handleMonthChange = (newDate: string) => {
    setYearMonthDay(newDate);
    // TODO: 데이터를 서버에서 받아와야 하면 여기에서 호출하세요.
    getLocalHourlyUsage(1, newDate)
      .then(response => {
        setLine(response.data.result.data);
        console.log('시간대별 이용 현황 데이터:', response.data.result);
      })
      .catch(error => {
        console.error('시간대별 이용 현황 데이터 가져오기 실패:', error);
      });
  };

  return (
    <div className="h-full w-full min-w-0 flex flex-col items-start">
      <section className="flex w-full min-w-0 justify-between items-center gap-2 mb-2">
        <SubTitle subTitle="시간대별 분석(명)" />
        <input
          type="date"
          value={yearMonthDay}
          onChange={e => handleMonthChange(e.target.value)}
          className="border h-[5px] border-gray-300 rounded-md p-2.5 text-grayscale "
        />
      </section>
      <div
        className="overflow-x-auto overflow-y-hidden w-full flex-1 min-w-0 min-h-0"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div className="min-w-[1000px] h-full">
          <ResponsiveLine
            data={[
              {
                id: 'path',
                data:
                  data?.map(line => ({
                    x: line.hour.toString().padStart(2, '0'),
                    y: line.useCount,
                  })) || [],
              },
            ]}
            margin={{ top: 30, right: 10, bottom: 50, left: 30 }}
            enableGridX={false}
            pointSize={10}
            colors={'#007CFF'}
            pointColor={'#007CFF'}
          />
        </div>
      </div>
    </div>
  );
};

export default LocalLine;
