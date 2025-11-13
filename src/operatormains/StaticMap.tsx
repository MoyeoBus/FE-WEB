import { Map, Polyline } from 'react-kakao-maps-sdk';
import useKakaoLoader from './useKaKaoLoader';

const StaticMap = () => {
  useKakaoLoader();
  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: '100%',
        height: '100%',
        borderRadius: '0.625rem',
        border: '1px solid var(--Grayscale-Outline, #CED4DA)',
      }}
      level={3} // 지도의 확대 레벨
    >
      <Polyline
        path={[
          [
            { lat: 33.452344169439975, lng: 126.56878163224233 },
            { lat: 33.452739313807456, lng: 126.5709308145358 },
            { lat: 33.45178067090639, lng: 126.572688693875 },
          ],
        ]}
        strokeWeight={6} // 선의 두께 입니다
        strokeColor={'#FD7E14'} // 선의 색깔입니다
        strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={'solid'} // 선의 스타일입니다
      />
    </Map>
  );
};

export default StaticMap;
