import create from 'zustand';

interface DateStore {
  selectedDates: string[];
  startDate: string | null;
  endDate: string | null;
  selectDate: (date: string) => void;
}

const useDateStore = create<DateStore>((set) => ({
  selectedDates: [],
  startDate: null,
  endDate: null,
  selectDate: (date) =>
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

      return {
        startDate: newStartDate,
        endDate: newEndDate,
        selectedDates: newSelectedDates,
      };
    }),
}));

export default useDateStore;
