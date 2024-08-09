import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InsertTripRoute from '@pages/InsertTripRoute/InsertTripRoute';

import MainPage from '@pages/Home/MainPage';

import MyGoogleMap from '@pages/GoogleMap/MyGoogleMap';

import MyTripRoute from '@pages/MyTripRoute/MyTripRoute';

import InsertTripRouteTwo from '@pages/InsertTripRoute/InsertTripRouteTwo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/googleMap" element={<MyGoogleMap />} />
        <Route path="/myTripRoute" element={<MyTripRoute />} />
        <Route path="/insertTripRoute" element={<InsertTripRoute />} />
        <Route path="/insertTripRouteTwo" element={<InsertTripRouteTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
