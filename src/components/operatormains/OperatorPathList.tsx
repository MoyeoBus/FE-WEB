import { useState, useEffect } from 'react';

import { getOperatorStatus } from '../../api/operatorApi';
import type { OperatorHistoryItem } from '../../types/operatorType';

import MiniTextsLayOut from '../../layouts/MiniTextsLayOut';
import MiniTextContainer from '../containers/MiniTextContainer';
import MainTitle from '../maintexts/MainTitle';
import PathListTable from './PathListTable';

// 상태 데이터 인터페이스
export interface StatusData {
  todayCount: number;
  pathCount: number;
  finished: number;
}

const OperatorPathList = () => {
  const [statusData, setStatusData] = useState<StatusData>({
    todayCount: 0,
    pathCount: 0,
    finished: 0,
  });
  const [tableData, setTableData] = useState<OperatorHistoryItem[] | null>([]);

  //상태

  useEffect(() => {
    getOperatorStatus(1)
      .then(response => {
        setStatusData({
          todayCount: response.data.result.operationCount,
          pathCount: response.data.result.busUsage.operateCount,
          finished: response.data.result.busUsage.completedCount,
        });
        setTableData(response.data.result.history);
      })
      .catch(error => {
        console.error('운수사 운행 현황 조회 실패:', error);
      });
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-3 min-h-0">
      <MiniTextsLayOut>
        <MiniTextContainer
          name="오늘 운행"
          value={statusData.todayCount + ' 건'}
        />
        <MiniTextContainer
          name="배차 건수"
          value={statusData.pathCount + ' 건'}
        />
        <MiniTextContainer
          name="탑승 완료"
          value={statusData.finished + ' 건'}
        />
      </MiniTextsLayOut>
      <section className="mt-6.5">
        <div className="mb-2.5">
          <MainTitle title="운행 이력 및 실시간 위치 조회" />
        </div>
        <PathListTable
          pathData={
            tableData?.map(item => {
              return {
                line: item.routeId,
                pathInfo: `${item.departureNm} -> ${item.destinationNm}`,
                driver: '홍길동',
                status: item.status,
              };
            }) || []
          }
        />
      </section>
    </div>
  );
};

export default OperatorPathList;
