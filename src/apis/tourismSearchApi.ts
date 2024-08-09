import axios from 'axios';
import { TourismResponse } from '@stores/useTourismDataStore';
import { debounce } from 'lodash';

export const fetchTourismDataByKeywordDebounced = debounce(
  async (keyword: string, set: (state: any) => void) => {
    if (!keyword.trim()) return;
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
      const url = 'https://apis.data.go.kr/B551011/KorService1/searchKeyword1';
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
