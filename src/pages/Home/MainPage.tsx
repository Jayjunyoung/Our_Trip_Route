import { Button } from '@mui/material';
import Header from '../../components/common/Header.tsx';
import { auth, provider } from '../../firebase-config.ts';
import {
  signOut,
  getRedirectResult,
  signInWithRedirect,
  onAuthStateChanged,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { UserInfo } from '../../types/UserInfo.ts'; // UserInfo 타입 임포트
import axios from 'axios';

export default function MainPage() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loginState, setLoginState] = useState<boolean>(false);
  const [randomImages, setRandomImages] = useState<string[]>([]);

  console.log(randomImages);

  const loginClick = async (): Promise<void> => {
    await signInWithRedirect(auth, provider); // 로그인 요청을 redirect 방식으로 변경
  };

  const logOut = async (): Promise<void> => {
    await signOut(auth)
      .then(() => {
        setUserInfo(null);
        setLoginState(false);
        localStorage.removeItem('userInfo');
        localStorage.removeItem('date-store');
        localStorage.removeItem('tourismData');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const savedUserInfo = localStorage.getItem('userInfo');
    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo));
      setLoginState(true);
    }

    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          const user = result.user;
          setUserInfo(user);
          setLoginState(true);
          localStorage.setItem('userInfo', JSON.stringify(user));
        }
      })
      .catch((error) => {
        console.error(error);
        setLoginState(false); // 에러 발생 시 로그인 상태를 false로 설정
      });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
        setLoginState(true);
        localStorage.setItem('userInfo', JSON.stringify(user));
      } else {
        setUserInfo(null);
        setLoginState(false);
        localStorage.removeItem('userInfo');
      }
    });
  }, []);

  const fetchRandomImages = async () => {
    try {
      const encodedServiceKey = import.meta.env.VITE_TOUR_API_KEY;
      const serviceKey = decodeURIComponent(encodedServiceKey);
      const response = await axios.get(
        'http://apis.data.go.kr/B551011/KorService1/detailImage1',
        {
          params: {
            serviceKey,
            MobileOS: 'ETC',
            MobileApp: 'AppTest',
            contentId: '1095732',
            imageYN: 'Y',
            subImageYN: 'Y',
            numOfRows: 10,
            pageNo: 1,
            _type: 'json',
          },
        },
      );

      console.log('API Response:', response.data);

      const items = response.data.response.body.items.item;

      console.log('Items:', items);

      // 랜덤으로 3개의 이미지를 선택
      const randomSelection = [];
      const imageCount = items.length;
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * imageCount);
        randomSelection.push(items[randomIndex].originimgurl);
      }
      setRandomImages(randomSelection);
    } catch (error) {
      console.error('Failed to fetch images:', error);
    }
  };

  useEffect(() => {
    fetchRandomImages();

    const intervalId = setInterval(
      () => {
        fetchRandomImages();
      },
      10 * 60 * 1000,
    );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-full bg-[url('/src/assets/mainImage.png')] bg-cover bg-center bg-no-repeat">
      <Header userInfo={userInfo} />
      <div className="flex w-full justify-center h-[350px]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl font-bold text-slate-50">Our trip route</div>
          <div className="w-4/5 mt-10 rounded-md">
            {loginState ? (
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
                onClick={logOut}
                variant="contained"
              >
                로그아웃
              </Button>
            ) : (
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
                onClick={loginClick}
                variant="contained"
              >
                로그인
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-auto px-5">
        <div className="flex justify-center font-semibold text-white">
          국내 인기 관광지
        </div>
        <div className="flex justify-evenly w-full h-[320px] py-5 box-border">
          {randomImages.map((imagePath, index) => (
            <div
              className="flex flex-col justify-center w-[300px] h-full border-4"
              key={index}
            >
              <img
                src={imagePath}
                alt={`Image ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bubble-wrapper absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="bubble absolute bottom-0 bg-white rounded-full shadow-lg z-50"
            style={{
              animation: `move ${Math.random() * (12 - 8) + 8}s infinite`,
              bottom: `-10%`,
              left: `${Math.random() * 100}%`,
              width: `${15}px`,
              height: `${15}px`,
              opacity: `${Math.random() * (0.6 - 0.2) + 0.2}`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
