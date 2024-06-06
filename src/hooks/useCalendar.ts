import { useCallback } from 'react';
import useDateStore from '../../stores/useDateStore';

const useCalendar = () => {
  const { selectedDates, selectDate } = useDateStore();

  const onDateClick = useCallback(
    (date: string) => {
      selectDate(date);
    },
    [selectDate],
  );

  return {
    selectedDates,
    onDateClick,
  };
};

export default useCalendar;
