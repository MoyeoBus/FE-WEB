import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { pointedLocation } from '../atoms/operatorAtoms';

interface Stop {
  id: number;
  name: string;
  time: string;
  status: '출발' | '예정' | '종점' | '지남' | '현재' | '종료';
  latlng: { lat: number; lng: number };
}

interface BusRouteCardProps {
  line: string;
  driver: string;
  stops: Stop[];
  currentStopId?: number; // 현재 위치 표시 (선택적, 현재는 사용하지 않음)
}

const PathInfo = ({ line, driver, stops }: BusRouteCardProps) => {
  const [selectedStopId, setSelectedStopId] = useState<number | null>(null);

  const [, setPointed] = useAtom(pointedLocation);

  // 초기 현재 정류장 설정
  useEffect(() => {
    const currentStop = stops.find(stop => stop.status === '현재');
    if (currentStop && selectedStopId === null) {
      setSelectedStopId(currentStop.id);
      setPointed({ lat: currentStop.latlng.lat, lng: currentStop.latlng.lng });
    } else if (!currentStop && stops.length > 0 && selectedStopId === null) {
      // '현재' 상태의 정류장이 없으면 첫 번째 정류장으로 설정
      setSelectedStopId(stops[0].id);
      setPointed({ lat: stops[0].latlng.lat, lng: stops[0].latlng.lng });
    }
  }, [stops, selectedStopId, setPointed]);

  return (
    <div className="w-60 h-full bg-white rounded-xl border border-gray-200  flex flex-col min-h-0">
      {/* Header */}
      <div className="py-4 px-5 shrink-0">
        <p className="typo-tableAccent">
          운행노선: <span className="typo-caption">{line}</span>
        </p>
        <p className="typo-tableAccent">
          운행기사: <span className="typo-caption">{driver}</span>
        </p>
      </div>

      <hr className="border-gray-200 mb-3 w-full shrink-0" />

      <div
        className="flex flex-col gap-4 relative px-2 pb-4 flex-1 min-h-0 overflow-y-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {stops.map((stop, index) => {
          const isSelected = selectedStopId === stop.id;
          return (
            <div
              key={stop.id}
              onClick={() => {
                setSelectedStopId(stop.id);
                setPointed({ lat: stop.latlng.lat, lng: stop.latlng.lng });
              }}
              className={`relative flex items-start h-16 w-full px-2 py-2 cursor-pointer transition-colors rounded-[10px] ${
                isSelected ? 'bg-primary ' : 'hover:bg-gray-50 '
              }`}
            >
              {/* 세로 라인 */}
              {index !== stops.length - 1 && (
                // 점선 스타일: border-l + border-dashed 사용
                <div className="absolute left-4.25 top-7 h-17 border-l border-dashed border-gray-200" />
              )}

              {/* 원형 번호 */}
              <div className="flex items-center justify-center w-5 h-5 rounded-full typo-table bg-primary-lighter">
                {stop.id}
              </div>

              {/* 텍스트 */}
              <div className="ml-3">
                <p className={`typo-table ${isSelected ? 'text-white' : ''}`}>
                  ({stop.status}) {stop.name}
                </p>
                <p className={`typo-caption ${isSelected ? 'text-white' : ''}`}>
                  {stop.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PathInfo;
