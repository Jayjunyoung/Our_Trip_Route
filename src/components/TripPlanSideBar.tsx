import React from 'react';
import useDateStore from '../../stores/useDateStore';

const TripPlanSideBar: React.FC = () => {
  const { startDate, endDate } = useDateStore();

  return (
    <div className="top-0 left-0 flex flex-col justify-start items-center w-[300px] h-full bg-blue-50 z-50 max-w-[300px] px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">선택된 날짜</h2>
      <ul className="space-y-2">
        {startDate && endDate && startDate <= endDate ? (
          <li className="mb-2 text-lg">
            {startDate} ~ {endDate}
          </li>
        ) : (
          <li className="mb-2 text-lg">{startDate}</li>
        )}
      </ul>
    </div>
  );
};

export default TripPlanSideBar;
