import { create } from 'zustand';
import axios from 'axios';
import { debounce } from 'lodash';

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

interface TourismResponse {
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
  //이거를 활용해서 여행정보를 id로 구분해줘야할듯
  id: string;
  dayRoutes: { [key: string]: TourismItem[] };
}

interface TourismDataStore {
  tourismData: TourismItem[];
  fetchTourismDataByKeyword: (keyword: string) => void;
  selectedTourismItem: TourismItem | null;
  selectTourismItem: (item: TourismItem) => void;
  clearTourismData: () => void;
  loadTourismDataFromLocalStorage: () => void;
  dayRoutes: { [key: string]: TourismItem[] };
  saveDayRoute: (day: string, data: TourismItem[]) => void;
}

const fetchTourismDataByKeywordDebounced = debounce(
  async (keyword: string, set) => {
    if (!keyword.trim()) return; // keyword가 빈 문자열일 경우 요청 X
    try {
      const encodedServiceKey = import.meta.env.VITE_TOUR_API_KEY;
      const serviceKey = decodeURIComponent(encodedServiceKey);

      const params = {
        serviceKey,
        numOfRows: 10,
        pageNo: 1,
        MobileOS: 'ETC',
        MobileApp: 'AppTest',
        _type: 'json',
        listYN: 'Y',
        arrange: 'A',
        keyword,
      };

      const url = 'http://apis.data.go.kr/B551011/KorService1/searchKeyword1';

      const response = await axios.get<TourismResponse>(url, { params });

      if (
        response.data &&
        response.data.response &&
        response.data.response.body
      ) {
        const data = response.data.response.body;
        set({ tourismData: data.items.item });
      } else {
        console.error('Unexpected response structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching tourism data:', error);
    }
  },
  300,
);

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
    set({ tourismData: [], selectedTourismItem: null }); // selectedTourismItem 초기화
  },
  dayRoutes: {},
  saveDayRoute: (day: string, data: TourismItem[]) => {
    set((state) => ({
      dayRoutes: {
        ...state.dayRoutes,
        [day]: data,
      },
    }));
    localStorage.setItem(
      'dayRoutes',
      JSON.stringify({
        ...JSON.parse(localStorage.getItem('dayRoutes') || '{}'),
        [day]: data,
      }),
    );
  },
  loadTourismDataFromLocalStorage: () => {
    const storedData = localStorage.getItem('dayRoutes');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      set({ dayRoutes: parsedData });
    }
  },
}));

export default useTourismDataStore;
