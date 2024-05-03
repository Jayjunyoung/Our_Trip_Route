//import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyTripRoute from './components/MyTripRoute.tsx';
import MainPage from './components/MainPage.tsx';
import InsertTripRoute from './components/InsertTripRoute.tsx';
import InsertTripRoute2 from './components/InsertTripRoute2.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/myTripRoute" element={<MyTripRoute />} />
        <Route path="/insertTripRoute" element={<InsertTripRoute />} />
        <Route path="/insertTripRoute2" element={<InsertTripRoute2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
