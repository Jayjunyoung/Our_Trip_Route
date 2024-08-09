import axios from 'axios';
import { TourismResponse } from '@stores/useLocationDataStore';

export const fetchTourismDataByLocation = async (
  lat: number,
  lng: number,
  set: (state: any) => void,
) => {
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
};
