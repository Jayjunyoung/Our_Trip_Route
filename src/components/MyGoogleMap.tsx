import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MapLeftSideBar from './MapLeftSideBar';
import { useState, useEffect } from 'react';

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

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  // 현재 위치를 가져오는 함수
  const updateCenterToCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLat = position.coords.latitude;
          const newLng = position.coords.longitude;
          setCenter({ lat: newLat, lng: newLng });
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
    updateCenterToCurrentLocation(); // 컴포넌트가 마운트될 때 현재 위치로 중심을 설정
  }, []);

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full h-full">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <MapLeftSideBar updateCenter={updateCenterToCurrentLocation} />
      </GoogleMap>
    </div>
  );
}
