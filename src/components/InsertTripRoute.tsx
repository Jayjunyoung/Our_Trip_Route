import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  differenceInCalendarDays,
  getMonth,
  isSaturday,
  isSunday,
} from 'date-fns';

import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons';
import { useMemo, useState } from 'react';
import LeftSideBar from './LeftSideBar';

export default function InsertTripRoute() {
  const [currentDate, setCurrentDate] = useState(new Date());
  //const [showButton, setShowButton] = useState<number>();
  //const [clickedButton, setClickedButton] = useState<boolean>(false);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const weekMock = ['일', '월', '화', '수', '목', '금', '토'];

  const createMonth = useMemo(() => {
    const monthArray = [];
    let day = startDate;
    while (differenceInCalendarDays(endDate, day) >= 0) {
      monthArray.push(day);
      day = addDays(day, 1);
    }
    return monthArray;
  }, [startDate, endDate]);

  return (
    <div className="flex justify-between w-full h-full">
      <LeftSideBar />
      <div className="w-full h-full">
        <section className="w-full h-full p-12">
          <div className="text-center text-3xl font-bold mb-2">
            {format(currentDate, 'yyyy년')}
          </div>
          <div className="flex justify-center items-center mb-2 mt-5">
            <button className="unset-all w-10 h-10 flex justify-center items-center cursor-pointer">
              <ChevronLeftIcon className="w-full h-full text-black cursor-pointer" />
            </button>
            <div className="text-2xl mx-5 font-bold">
              {format(currentDate, 'M월')}
            </div>
            <button className="unset-all w-10 h-10 flex justify-center items-center cursor-pointer">
              <ChevronRightIcon className="w-full h-full text-black cursor-pointer" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 mt-5">
            {weekMock.map((day, i) => (
              <div
                key={day}
                className={`py-2 text-center font-bold ${i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : 'text-black'}`}
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 mt-2">
            {createMonth.map((day, i) => {
              return (
                <div key={i} className="p-2 h-32 border border-black font-bold">
                  {format(day, 'd')}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
