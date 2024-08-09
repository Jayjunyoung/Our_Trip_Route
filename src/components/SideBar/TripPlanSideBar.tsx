import React, { useState } from 'react';
import { TourismItem } from '@stores/useTourismDataStore';
import useDateStore from '@stores/useDateStore';
import useTourismDataStore from '@stores/useTourismDataStore';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';

const TripPlanSideBar: React.FC = () => {
  const { startDate, endDate } = useDateStore();
  const { tourismData, selectTourismItem } = useTourismDataStore();
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
          <div className="w-full flex justify-center items-center">
            <CalendarDaysIcon className="w-6 h-6 inline-block mr-2" />
            <li className="text-sm font-semibold">
              {startDate} ~ {endDate}
            </li>
          </div>
        ) : (
          <li className="text-sm font-semibold">{startDate}</li>
        )}
      </ul>
      {tourismData && tourismData.length > 0 ? (
        <div className="w-full">
          <div className="w-full flex justify-center items-center">
            <h2 className="text-2xl font-bold text-center mb-4 mt-8 text-blue-600">
              <MapPinIcon className="w-6 h-6 inline-block shrink-0" />
              검색 결과
            </h2>
          </div>
          <ul className="space-y-2">
            {tourismData.map((item) => (
              <li
                key={item.contentid}
                onClick={() => handleSelect(item)}
                className={`cursor-pointer bg-white p-4 rounded text-center shadow hover:bg-blue-100 transition duration-300 ${
                  selectedId === item.contentid ? 'bg-blue-200' : ''
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default TripPlanSideBar;
