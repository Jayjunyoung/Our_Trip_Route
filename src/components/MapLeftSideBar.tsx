import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MapLeftSideBarProps {
  updateCenter: () => void;
}

export default function MapLeftSideBar({ updateCenter }: MapLeftSideBarProps) {
  const navigate = useNavigate();
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-evenly items-center w-[300px] h-full bg-blue-50 z-50">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-between items-center">
          <img
            className="transition-transform duration-300 ease-in-out hover:scale-110"
            src="../src/assets/icon.png"
            alt="현재 위치 아이콘"
            onClick={updateCenter} // 클릭 시 현재 위치로 업데이트
          />
          <span className="font-semibold mt-5">현재 위치</span>
        </div>
        <div className="flex flex-col justify-between items-center mt-8">
          <img
            className="transition-transform duration-300 ease-in-out hover:scale-110"
            src="../src/assets/icon2.png"
            alt="최근 여행 경로 아이콘"
            onClick={() => navigate('/myTripRoute')}
          />
          <span className="font-semibold mt-5">나의 여행 경로</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-between items-center mt-8">
          <img
            className="transition-transform duration-300 ease-in-out hover:scale-110"
            src="../src/assets/icon3.png"
            alt="여행 경로 지정 아이콘"
            onClick={() => navigate('/insertTripRoute')}
          />
          <span className="font-semibold mt-5">여행 경로 지정</span>
        </div>
      </div>
    </div>
  );
}
