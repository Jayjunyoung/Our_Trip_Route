//import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="w-full h-full bg-[url('/src/assets/mainImage.png')] bg-cover bg-center bg-no-repeat">
      <Header />
      <div className="flex w-full justify-center h-[400px]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl font-bold text-slate-50">our trip route</div>
          <div className="w-4/5 mt-10 rounded-md">
            <Button
              sx={{
                backgroundColor: '#FFF6F6', // 기본 배경색
                color: 'black', // 기본 글자색
                '&:hover': {
                  backgroundColor: '#FFF6F6', // 호버 시 배경색
                  color: 'black', // 호버 시 글자색
                },
                '&:active': {
                  backgroundColor: '#FFF6F6', // 클릭 시 배경색
                  color: 'black', // 클릭 시 글자색
                },
              }}
              className="w-full h-full"
              variant="contained"
            >
              로그인
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-auto px-5 pt-5">
        <div className="flex justify-center font-semibold text-white">
          국내 인기 관광지
        </div>
        <div className="flex justify-evenly w-full h-[320px] py-5 box-border">
          <div className="flex flex-col justify-center w-[300px] h-full border-4"></div>
          <div className="flex flex-col justify-center w-[300px] h-full border-4"></div>
          <div className="flex flex-col justify-center w-[300px] h-full border-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
