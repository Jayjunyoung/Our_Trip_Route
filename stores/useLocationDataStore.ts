import { create } from 'zustand';
import axios from 'axios';

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

interface LocationDataStore {
  locationTourismData: TourismItem[];
  fetchTourismDataByLocation: (lat: number, lng: number) => Promise<void>;
}

const useLocationDataStore = create<LocationDataStore>((set) => ({
  locationTourismData: [],
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
        'https://apis.data.go.kr/B551011/KorService1/locationBasedList1';

      const response = await axios.get<TourismResponse>(url, { params });

      if (
        response.data &&
        response.data.response &&
        response.data.response.body
      ) {
        console.log(response.data);
        const data = response.data.response.body;
        set({ locationTourismData: data.items.item });
      } else {
        console.error('Unexpected response structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching tourism data:', error);
    }
  },
}));

export default useLocationDataStore;
