import { useAtom } from 'jotai';
import { userRoleAtom } from '../atoms/sideBarAtoms';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoSrc from '../assets/logo/busWhite.svg';

const Home = () => {
  const navigate = useNavigate();
  const [, setRole] = useAtom(userRoleAtom);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50 p-4">
      <div
        className="w-[60%] max-w-7xl h-[95vh] grid gap-4 p-4"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(5, 1fr)',
          gridTemplateAreas: `
      "c1 c1 c1 c1  "
      "bus bus title title "
      "bus bus title title "
      "local c4 c4 c4 "
      "operator c4 c4 c4 "
    `,
        }}
      >
        {/* 컨테이너 1 */}
        <div
          style={{ gridArea: 'c1' }}
          className="rounded-2xl flex flex-col items-start justify-center p-2"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            당신의 수요가 곧 노선이 됩니다.
          </h1>
          <p className="typo-body mt-2 text-gray-600">
            사전 확정형 커스텀 노선으로, 언제나 신뢰할 수 있는 지역 맞춤형
            교통을 경험하세요.
          </p>
        </div>

        {/* 컨테이너 4 */}
        <div
          style={{ gridArea: 'c4' }}
          className="bg-white rounded-2xl flex flex-col items-start p-6 border-2 border-[#DCEEFF]"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            모여 버스 운행 3단계
          </h2>

          <div className="w-full flex justify-between space-x-4">
            <div className="flex-1 p-3 bg-gray-50 rounded-lg border-l-4 border-[#007CFF]">
              <p className="font-bold text-lg text-base-black">
                Step 1. 수요 예약
              </p>
              <p className="text-sm text-gray-600 mt-1">
                이용 희망일 24시간 전까지 출발/도착지를 입력합니다.
              </p>
            </div>

            <div className="flex-1 p-3 bg-gray-50 rounded-lg border-l-4 border-[#007CFF]">
              <p className="font-bold text-lg text-base-black">
                Step 2. 노선 생성
              </p>
              <p className="text-sm text-gray-600 mt-1">
                예약 정보가 일정 수 이상 축적되면 신규 커스텀 노선으로
                확정됩니다.
              </p>
            </div>

            <div className="flex-1 p-3 bg-gray-50 rounded-lg border-l-4 border-[#007CFF]">
              <p className="font-bold text-lg text-base-black">
                Step 3. 확정 운행
              </p>
              <p className="text-sm text-gray-600 mt-1">
                확정된 노선은 공지 후 운행되며, 모든 승객이 이용 가능합니다.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t w-full">
            <p className="typo-caption text-gray-500">
              * 반복 수요가 확인된 노선은 일정 기간 후 지속 운행 노선으로 전환될
              수 있습니다.
            </p>
          </div>
        </div>

        {/* 버스 카드 */}
        <div
          style={{ gridArea: 'bus' }}
          className="bg-[#007CFF] rounded-2xl flex items-center justify-center relative overflow-hidden"
        >
          <motion.img
            src={logoSrc}
            alt="Bus Logo"
            className="w-60 h-60 object-contain z-10"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
          />

          <svg
            viewBox="0 0 500 80"
            preserveAspectRatio="none"
            className="w-full h-16 absolute bottom-10"
          >
            <motion.path
              d="M0,30 C50,60 150,0 250,30 C350,60 450,0 500,30"
              fill="none"
              stroke="#FD7E14"
              strokeWidth="3"
              strokeDasharray="8 4"
              animate={{
                d: [
                  'M0,30 C50,60 150,0 250,30 C350,60 450,0 500,30',
                  'M0,30 C50,0 150,60 250,30 C350,0 450,60 500,30',
                  'M0,30 C50,60 150,0 250,30 C350,60 450,0 500,30',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        {/* 타이틀 카드 */}
        <div
          style={{ gridArea: 'title' }}
          className="bg-white border-2 border-[#007CFF] rounded-2xl flex flex-col items-center justify-center p-4"
        >
          <p className="typo-body text-gray-600">모여서 만드는 지역의 길,</p>
          <h1 className="typo-h1 text-5xl font-extrabold text-[#007CFF] mt-1">
            모여 버스
          </h1>
        </div>

        {/* 지자체 버튼 */}
        <button
          style={{ gridArea: 'local' }}
          className="bg-white border-2 border-[#007CFF] rounded-2xl p-4 flex flex-col justify-center items-start text-left hover:bg-gray-50 transition duration-300"
          onClick={() => {
            navigate('/local');
            setRole('local');
          }}
        >
          <div className="typo-h3 font-bold text-gray-800 flex items-center">
            지자체 바로가기
          </div>
          <div className="typo-caption mt-1 text-gray-500">
            지역의 수요 및 운행 데이터를 확인해보세요.
          </div>
        </button>

        {/* 운수사 버튼 */}
        <button
          style={{ gridArea: 'operator' }}
          className="bg-white border-2 border-[#007CFF] rounded-2xl p-4 flex flex-col justify-center items-start text-left hover:bg-gray-50 transition duration-300"
          onClick={() => {
            navigate('/operator');
            setRole('operator');
          }}
        >
          <div className="typo-h3 font-bold text-gray-800 flex items-center">
            운수사 바로가기
          </div>
          <div className="typo-caption mt-1 text-gray-500">
            노선 생성 및 운영 효율 데이터를 확인해보세요.
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
