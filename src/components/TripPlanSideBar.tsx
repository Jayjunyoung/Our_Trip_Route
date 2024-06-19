import React, { useState } from 'react';
import { TourismItem } from '../../stores/useTourismDataStore';
import useDateStore from '../../stores/useDateStore';
import useTourismDataStore from '../../stores/useTourismDataStore';

interface TripPlanSideBarProps {
  tourismData: TourismItem[];
}

const TripPlanSideBar: React.FC<TripPlanSideBarProps> = ({ tourismData }) => {
  const { startDate, endDate } = useDateStore();
  const { selectTourismItem } = useTourismDataStore();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelect = (item: TourismItem) => {
    selectTourismItem(item);
    setSelectedId(item.contentid);
  };

  return (
    <div className="top-0 left-0 flex flex-col justify-start items-center w-[300px] h-full bg-blue-50 z-50 max-w-[300px] px-4 py-10 overflow-y-auto">
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
      {tourismData && tourismData.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-4 mt-8">검색 결과</h2>
          <ul className="space-y-2">
            {tourismData.map((item) => (
              <li
                key={item.contentid}
                onClick={() => handleSelect(item)}
                className={`cursor-pointer hover:bg-gray-200 p-2 rounded ${
                  selectedId === item.contentid ? 'bg-blue-200' : ''
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default TripPlanSideBar;
