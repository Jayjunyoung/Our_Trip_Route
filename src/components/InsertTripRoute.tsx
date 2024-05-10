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
import { useCallback, useMemo, useState } from 'react';
import LeftSideBar from './LeftSideBar';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function InsertTripRoute() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());

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

  const nextMonthHandler = useCallback(() => {
    setCurrentDate(addMonths(currentDate, 1));
  }, [currentDate]);

  const prevMonthHandler = useCallback(() => {
    setCurrentDate(subMonths(currentDate, 1));
  }, [currentDate]);

  return (
    <div className="flex justify-between w-full h-full">
      <LeftSideBar />
      <div className="w-full h-auto overflow-y-scroll">
        <section className="w-full h-auto px-8 py-6">
          <div className="text-center text-3xl font-bold mb-2">
            {format(currentDate, 'yyyy년')}
          </div>
          <div className="flex justify-center items-center mb-2 mt-5">
            <button className="unset-all w-10 h-10 flex justify-center items-center cursor-pointer">
              <ChevronLeftIcon
                className="w-full h-full text-black cursor-pointer"
                onClick={prevMonthHandler}
              />
            </button>
            <div className="text-2xl mx-5 font-bold">
              {format(currentDate, 'M월')}
            </div>
            <button className="unset-all w-10 h-10 flex justify-center items-center cursor-pointer">
              <ChevronRightIcon
                className="w-full h-full text-black cursor-pointer"
                onClick={nextMonthHandler}
              />
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
          <div className="flex justify-end w-full h-auto px-10 font-bold mt-5">
            <Button
              variant="contained"
              className=""
              onClick={() => navigate('/insertTripRoute2')}
            >
              Next
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
