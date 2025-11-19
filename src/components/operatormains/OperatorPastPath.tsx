import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { useLocation } from 'react-router-dom';
import MiniTextContainer from '../containers/MiniTextContainer';
import MiniTextsLayOut from '../../layouts/MiniTextsLayOut';
import PathInfo from './PathInfo';
import StaticMap from './StaticMap';
import { getOperatorHistory } from '../../api/operatorApi';
import { pointedLocation } from '../../atoms/operatorAtoms';

// 상태 데이터 인터페이스
export interface StatusData {
  todayCount: number;
  pathCount: number;
  finished: number;
}

//정류장 타입
export interface StopData {
  id: number;
  name: string;
  time: string;
  status: string;
  latlng: { lat: number; lng: number };
}

const OperatorPastPath = () => {
  const { state } = useLocation();

  const [, setPointed] = useAtom(pointedLocation);

  const [statusData, setStatusData] = useState<StatusData>({
    todayCount: 0,
    pathCount: 0,
    finished: 0,
  });

  const [stopsData, setStopsData] = useState<StopData[]>([]);

  const [positions, setPositions] = useState<
    { title: string; latlng: { lat: number; lng: number } }[]
  >([]);

  const [path, setPath] = useState<{ lat: number; lng: number }[]>([]);

  useEffect(() => {
    // 여기에 API 호출을 추가하여 실제 데이터를 가져올 수 있습니다.
    getOperatorHistory(state.lineNM, 1)
      .then(response => {
        setStatusData({
          todayCount: response.data.result.info.operationCount,
          pathCount: response.data.result.info.busUsage.operateCount,
          finished: response.data.result.info.busUsage.completedCount,
        });
        setStopsData(
          response.data.result.items.map((item, index) => ({
            id: index + 1,
            name: item.station,
            time: item.time,
            status: item.tag,
            latlng: {
              lat: item.geoPoint.lon,
              lng: item.geoPoint.lat,
            },
          }))
        );
        setPositions(
          response.data.result.items.map(item => ({
            title: item.station,
            latlng: {
              lat: item.geoPoint.lon,
              lng: item.geoPoint.lat,
            },
          }))
        );
        setPath(
          response.data.result.points.map(point => ({
            lat: point.lon,
            lng: point.lat,
          }))
        );
        setPointed({
          lat: response.data.result.items[0].geoPoint.lon,
          lng: response.data.result.items[0].geoPoint.lat,
        });
      })
      .catch(error => {
        console.error('운수사 운행 이력 조회 실패:', error);
      });
  }, [state.lineNM, setPointed]);

  console.log(stopsData);

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
      <div className="flex-1 min-h-0 flex gap-6">
        <PathInfo
          line={state.lineNM + '번'}
          driver="배상명"
          stops={stopsData}
        />
        <StaticMap station={positions} path={path} />
      </div>
    </div>
  );
};

export default OperatorPastPath;
