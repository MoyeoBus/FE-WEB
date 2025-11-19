import { Map, Polyline, MapMarker } from 'react-kakao-maps-sdk';
import { useAtom } from 'jotai';
import { pointedLocation } from '../../atoms/operatorAtoms';
import useKakaoLoader from './useKaKaoLoader';
import busImage from '../../assets/map/bus.svg';
import ping from '../../assets/map/ping.svg';

type StaticMapProps = {
  title: string;
  latlng: { lat: number; lng: number };
};

interface StaticMapComponentProps {
  station: StaticMapProps[];
  path: { lat: number; lng: number }[];
}

const StaticMap = ({ station, path }: StaticMapComponentProps) => {
  useKakaoLoader();

  const [pointed] = useAtom(pointedLocation);

  const positions = station;

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: pointed.lat != null ? pointed.lat : 1,
        lng: pointed.lng != null ? pointed.lng : 1,
      }}
      style={{
        // 지도의 크기
        width: '100%',
        height: '100%',
        borderRadius: '0.625rem',
        border: '1px solid var(--Grayscale-Outline, #CED4DA)',
      }}
      level={6} // 지도의 확대 레벨
    >
      <Polyline
        path={path}
        strokeWeight={6} // 선의 두께 입니다
        strokeColor={'#FD7E14'} // 선의 색깔입니다
        strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={'solid'} // 선의 스타일입니다
      />
      {positions.map((station, index) => (
        <MapMarker
          key={index}
          position={station.latlng}
          title={station.title}
          image={{
            src: busImage,
            size: {
              width: 24,
              height: 24,
            },
          }}
        />
      ))}

      {pointed.lat != null && pointed.lng != null && (
        <MapMarker
          position={{ lat: pointed.lat, lng: pointed.lng }}
          title={'지정 위치'}
          image={{
            src: ping,
            size: {
              width: 40,
              height: 40,
            },
            //마커 내부의 이미지 위치
            options: {
              offset: {
                x: 19,
                y: 65,
              },
            },
          }}
        />
      )}
    </Map>
  );
};

export default StaticMap;
