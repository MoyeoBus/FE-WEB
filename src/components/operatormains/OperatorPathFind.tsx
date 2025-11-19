import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { useLocation } from 'react-router-dom';
import MiniTextContainer from '../containers/MiniTextContainer';
import MiniTextsLayOut from '../../layouts/MiniTextsLayOut';
import PathInfo from './PathInfo';
import StaticMap from './StaticMap';
import { useOperatorTracking } from '../../utils/useOperatorTraking';
import { pointedLocation } from '../../atoms/operatorAtoms';

export interface StatusData {
  nextStation: string;
  gapTime: number;
  remainDistance: number;
}

//정류장 타입
export interface StopData {
  id: number;
  name: string;
  time: string;
  status: string;
  latlng: { lat: number; lng: number };
}

const OperatorPathFind = () => {
  const { state } = useLocation();

  const [, setPointed] = useAtom(pointedLocation);

  const [statusData, setStatusData] = useState<StatusData>({
    nextStation: '',
    gapTime: 0,
    remainDistance: 0,
  });

  const [stopsData, setStopsData] = useState<StopData[]>([]);

  const [path, setPath] = useState<{ lat: number; lng: number }[]>([]);

  const [positions, setPositions] = useState<
    { title: string; latlng: { lat: number; lng: number } }[]
  >([]);

  // 🔥 React Query 사용: 자동 refetch + 로딩/에러 관리
  const { data, isLoading, error } = useOperatorTracking(state.lineNM);

  // 🔥 data가 갱신될 때마다 자동으로 업데이트됨
  useEffect(() => {
    if (!data) return;

    const info = data.result.info;

    // 상단 3개 정보
    setStatusData({
      nextStation: info.nextStation,
      gapTime: info.gapTime,
      remainDistance: info.remainDistance,
    });

    // 정류장 리스트
    setStopsData(
      data.result.items.map((item, index) => ({
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

    // Path (버스 이동 경로)
    setPath(
      data.result.points.map(point => ({
        lat: point.lon,
        lng: point.lat,
      }))
    );

    // 마커 위치
    setPositions(
      data.result.items.map(item => ({
        title: item.station,
        latlng: {
          lat: item.geoPoint.lon,
          lng: item.geoPoint.lat,
        },
      }))
    );

    // 포커스 포인트 설정
    if (info.nextStationPoint.lon !== 0 && info.nextStationPoint.lat !== 0) {
      setPointed({
        lat: info.nextStationPoint.lon,
        lng: info.nextStationPoint.lat,
      });
    } else {
      const first = data.result.items[0].geoPoint;
      setPointed({
        lat: first.lon,
        lng: first.lat,
      });
    }
  }, [data, setPointed]);

  if (isLoading) return <div>불러오는 중...</div>;
  if (error) return <div>데이터 로드 실패</div>;

  return (
    <div className="w-full h-full flex flex-col gap-3 min-h-0">
      <MiniTextsLayOut>
        <MiniTextContainer name="다음 정류장" value={statusData.nextStation} />
        <MiniTextContainer
          name="다음 정류장까지 (예상)"
          value={
            statusData.gapTime !== 0 ? statusData.gapTime / 60 + ' 분' : '0 분'
          }
        />
        <MiniTextContainer
          name="남은 거리"
          value={
            statusData.remainDistance !== 0
              ? statusData.remainDistance / 1000 + ' km'
              : '0 km'
          }
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

export default OperatorPathFind;
