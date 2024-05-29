import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import MapLeftSideBar from './MapLeftSideBar';
import { useState, useEffect } from 'react';
import useTourStore, { TourismItem } from '../../store/store'; // 수정된 부분

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const initialCenter = {
  lat: -3.745,
  lng: -38.523,
};

export default function MyGoogleMap() {
  const [center, setCenter] = useState(initialCenter);
  const { tourismData, fetchTourismData } = useTourStore(); // 수정된 부분
  const [selectedPlace, setSelectedPlace] = useState<TourismItem | undefined>(
    undefined,
  );

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const updateCenterToCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLat = position.coords.latitude;
          const newLng = position.coords.longitude;
          setCenter({ lat: newLat, lng: newLng });
          fetchTourismData(newLat, newLng); // 현재 위치를 기반으로 관광 정보 가져오기
        },
        (error) => {
          console.error('Error getting current location:', error);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    updateCenterToCurrentLocation();
  }, []);

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!isLoaded) {
    return (
      <div className="absolute flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {tourismData.map((item, index) => (
          <Marker
            key={index}
            position={{ lat: Number(item.mapy), lng: Number(item.mapx) }}
            title={item.title}
            onClick={() => setSelectedPlace(item)}
          />
        ))}
        {selectedPlace &&
          selectedPlace.mapy &&
          selectedPlace.mapx && ( // 수정된 부분
            <InfoWindow
              position={{
                lat: Number(selectedPlace.mapy),
                lng: Number(selectedPlace.mapx),
              }}
              onCloseClick={() => setSelectedPlace(undefined)} // 수정된 부분
            >
              <div>
                <h2>{selectedPlace.title}</h2>
              </div>
            </InfoWindow>
          )}
        <MapLeftSideBar updateCenter={updateCenterToCurrentLocation} />
      </GoogleMap>
    </div>
  );
}
