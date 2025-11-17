import { useAtom } from 'jotai';
import { useState } from 'react';
import { calendarData } from '../../atoms/localAtoms';
import SubTitle from '../maintexts/SubTitle';
import TimeCalenderBlock from './TimeCalenderBlock';
import TimeCalenderLegend from '../localmains/TimeCalenderLegend';

//api
import { getLocalMonthlyUsage } from '../../api/localApi';

const LocalTimeCalendar = () => {
  const [data, setCalendar] = useAtom(calendarData);

  // 초기값: 현재 년월 기준
  const now = new Date();
  const [yearMonth, setYearMonth] = useState(
    `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
  );

  //날짜 변경
  const handleMonthChange = (newMonth: string) => {
    setYearMonth(newMonth);
    getLocalMonthlyUsage(1, newMonth) // yearMonth 대신 newMonth 사용
      .then(response => {
        setCalendar(response.data.result.data);
      })
      .catch(error => {
        console.error('월별 이용 현황 데이터 가져오기 실패:', error);
      });
  };

  return (
    <div className="w-full h-full flex flex-col items-start">
      {/* 월 선택 입력 (YYYY-MM 형식) */}
      <section className="w-full flex justify-between ">
        <SubTitle subTitle="일자별 이용 현황" />
        <input
          type="month"
          value={yearMonth}
          onChange={e => handleMonthChange(e.target.value)}
          className="h-[5px] border border-gray-300 rounded-md p-2.5 text-grayscale"
        />
      </section>
      <section className="w-full h-60 mt-8 grid grid-cols-7 gap-2 mb-5">
        {data && data.length > 0
          ? data.map((item, index) => (
              <TimeCalenderBlock
                key={index}
                value={item.useCount}
                day={item.date}
              />
            ))
          : null}
      </section>
      <TimeCalenderLegend />
    </div>
  );
};

export default LocalTimeCalendar;
