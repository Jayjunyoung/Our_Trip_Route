import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  MyTripRoute,
  MainPage,
  MyGoogleMap,
  InsertTripRoute,
  InsertTripRouteTwo,
} from './pages';

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
