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

interface TourismDataStore {
  tourismData: TourismItem[];
  fetchTourismDataByLocation: (lat: number, lng: number) => Promise<void>;
  selectedTourismItem: TourismItem | null;
  fetchTourismDataByKeyword: (keyword: string) => void;
  selectTourismItem: (item: TourismItem) => void;
  clearTourismData: () => void;
}

const fetchTourismDataByKeywordDebounced = debounce(
  async (keyword: string, set: any) => {
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
  fetchTourismDataByLocation: async (lat: number, lng: number) => {
    try {
      const encodedServiceKey = import.meta.env.VITE_TOUR_API_KEY;
      const serviceKey = decodeURIComponent(encodedServiceKey);

      const params = {
        serviceKey: serviceKey,
        numOfRows: 10,
        pageNo: 1,
        MobileOS: 'ETC',
        MobileApp: 'AppTest',
        _type: 'json',
        listYN: 'Y',
        arrange: 'A',
        contentTypeId: 15,
        mapX: lng,
        mapY: lat,
        radius: 8000,
      };

      const url =
        'http://apis.data.go.kr/B551011/KorService1/locationBasedList1';

      console.log('Requesting with params:', params);
      console.log('Request URL:', url, params);

      const response = await axios.get<TourismResponse>(url, { params });

      console.log('Full response data:', response.data);

      if (
        response.data &&
        response.data.response &&
        response.data.response.body
      ) {
        const data = response.data.response.body;
        console.log('Fetched tourism data:', data.items.item);
        console.log('Total count of items:', data.totalCount);
        set({ tourismData: data.items.item });
      } else {
        console.error('Unexpected response structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching tourism data:', error);
    }
  },
  selectedTourismItem: null,
  fetchTourismDataByKeyword: (keyword: string) => {
    fetchTourismDataByKeywordDebounced(keyword, set);
  },
  selectTourismItem: (item: TourismItem) => {
    set({ selectedTourismItem: item });
  },
  clearTourismData: () => {
    set({ tourismData: [], selectedTourismItem: null }); // selectedTourismItem 초기화
  },
}));

export default useTourismDataStore;
