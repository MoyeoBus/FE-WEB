import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { pointedLocation } from '../../atoms/operatorAtoms';

interface Stop {
  id: number;
  name: string;
  time: string;
  status: string;
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

  const [point, setPointed] = useAtom(pointedLocation);

  // 초기 selectedStopId: point의 좌표가 stops 중 하나와 같으면 해당 정류장을 선택
  useEffect(() => {
    if (
      selectedStopId == null &&
      point &&
      point.lat != null &&
      point.lng != null
    ) {
      const matched = stops.find(
        s =>
          s.latlng && s.latlng.lat === point.lat && s.latlng.lng === point.lng
      );
      if (matched) {
        setSelectedStopId(matched.id);
      }
    }
    // only run when stops or point change
  }, [stops, point, selectedStopId]);

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
