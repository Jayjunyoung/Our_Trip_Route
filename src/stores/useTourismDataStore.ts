import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { fetchTourismDataByKeywordDebounced } from '../apis/tourismSearchApi';

export interface TourismItem {
  title: string;
  mapx: number;
  mapy: number;
  addr1?: string;
  addr2?: string;
  contentid: number;
  contenttypeid: number;
  createdtime: string;
  dist: number;
  firstimage: string;
  firstimage2?: string;
  cpyrhtDivCd?: string;
  mlevel?: number;
  modifiedtime: string;
  sigungucode?: number;
  tel?: string;
}

export interface TourismResponse {
  response: {
    body: {
      items: {
        item: TourismItem[];
      };
      totalCount: number;
    };
    header: {
      resultCode: string;
      resultMsg: string;
    };
  };
}

export interface TripRecord {
  id: string;
  dayRoutes: { [key: string]: TourismItem[] };
}

interface TourismDataStore {
  tourismData: TourismItem[];
  fetchTourismDataByKeyword: (keyword: string) => void;
  selectedTourismItem: TourismItem | null;
  selectTourismItem: (item: TourismItem) => void;
  clearTourismData: () => void;
  tripRecords: TripRecord[];
  loadTourismDataFromLocalStorage: () => void;
  dayRoutes: { [key: string]: TourismItem[] };
  saveDayRoute: (day: string, data: TourismItem[]) => void;
  createNewTripRecord: () => string;
  saveTripRecordToLocalStorage: (tripRecord: TripRecord) => void;
}

const useTourismDataStore = create<TourismDataStore>((set) => ({
  tourismData: [],
  fetchTourismDataByKeyword: (keyword: string) => {
    fetchTourismDataByKeywordDebounced(keyword, set);
  },
  selectedTourismItem: null,
  selectTourismItem: (item: TourismItem) => {
    set({ selectedTourismItem: item });
  },
  clearTourismData: () => {
    set({ tourismData: [], selectedTourismItem: null });
  },
  tripRecords: [],
  saveDayRoute: (day: string, data: TourismItem[]) => {
    set((state) => ({
      dayRoutes: {
        ...state.dayRoutes,
        [day]: data,
      },
    }));
  },
  createNewTripRecord: () => {
    const id = uuidv4();
    return id;
  },
  loadTourismDataFromLocalStorage: () => {
    const storedData = localStorage.getItem('tripRecords');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      set({ tripRecords: parsedData });
    }
  },
  dayRoutes: {},
  saveTripRecordToLocalStorage: (tripRecord: TripRecord) => {
    set((state) => {
      const newTripRecords = [
        ...state.tripRecords.filter((tr) => tr.id !== tripRecord.id),
        tripRecord,
      ];
      localStorage.setItem('tripRecords', JSON.stringify(newTripRecords));
      return { tripRecords: newTripRecords };
    });
  },
}));

export default useTourismDataStore;
