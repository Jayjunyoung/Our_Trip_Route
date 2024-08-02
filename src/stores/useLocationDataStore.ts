import { create } from 'zustand';
import { fetchTourismDataByLocation } from '../apis/locationApi';

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

interface LocationDataStore {
  locationTourismData: TourismItem[];
  fetchTourismDataByLocation: (lat: number, lng: number) => Promise<void>;
}

const useLocationDataStore = create<LocationDataStore>((set) => ({
  locationTourismData: [],
  fetchTourismDataByLocation: async (lat: number, lng: number) => {
    await fetchTourismDataByLocation(lat, lng, set);
  },
}));

export default useLocationDataStore;
