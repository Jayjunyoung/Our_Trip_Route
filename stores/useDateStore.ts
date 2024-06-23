import { create } from 'zustand';

interface DateStore {
  selectedDates: string[];
  startDate: string | null;
  endDate: string | null;
  selectDate: (date: string) => void;
  loadFromLocalStorage: () => void;
}

const useDateStore = create<DateStore>((set) => {
  // 스토어 초기화 시 로컬 스토리지에서 데이터 불러오기
  const storedData = localStorage.getItem('date-store');
  const initialState = storedData
    ? JSON.parse(storedData)
    : { selectedDates: [], startDate: null, endDate: null };

  return {
    selectedDates: initialState.selectedDates || [],
    startDate: initialState.startDate,
    endDate: initialState.endDate,
    selectDate: (date: string) =>
      set((state) => {
        let newStartDate = state.startDate;
        let newEndDate = state.endDate;

        if (!state.startDate || (state.startDate && state.endDate)) {
          newStartDate = date;
          newEndDate = null;
        } else {
          newEndDate = date;
        }

        let newSelectedDates: string[] = [];
        if (newStartDate && newEndDate) {
          const start = new Date(newStartDate);
          const end = new Date(newEndDate);
          const range: string[] = [];

          for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
            range.push(new Date(d).toISOString().split('T')[0]);
          }

          newSelectedDates = range;
        }

        const newState = {
          startDate: newStartDate,
          endDate: newEndDate,
          selectedDates: newSelectedDates,
        };

        // 로컬 스토리지에 저장
        localStorage.setItem('date-store', JSON.stringify(newState));

        return newState;
      }),
    loadFromLocalStorage: () => {
      const storedData = localStorage.getItem('date-store');
      if (storedData) {
        const data = JSON.parse(storedData);
        set({
          selectedDates: data.selectedDates || [],
          startDate: data.startDate,
          endDate: data.endDate,
        });
      }
    },
  };
});

export default useDateStore;
