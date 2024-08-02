import { useEffect, useState } from 'react';
import axios from 'axios';

const useRandomImages = (contentId: string, numOfImages: number) => {
  const [randomImages, setRandomImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRandomImages = async () => {
    try {
      const encodedServiceKey = import.meta.env.VITE_TOUR_API_KEY;
      const serviceKey = decodeURIComponent(encodedServiceKey);
      const response = await axios.get(
        'https://apis.data.go.kr/B551011/KorService1/detailImage1',
        {
          params: {
            serviceKey,
            MobileOS: 'ETC',
            MobileApp: 'AppTest',
            contentId,
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

      // 랜덤으로 numOfImages개의 이미지를 선택
      const randomSelection = [];
      const imageCount = items.length;
      for (let i = 0; i < numOfImages; i++) {
        const randomIndex = Math.floor(Math.random() * imageCount);
        randomSelection.push(items[randomIndex].originimgurl);
      }
      setRandomImages(randomSelection);
      setLoading(false); // 데이터가 성공적으로 로드되면 로딩 상태를 false로 설정
    } catch (error) {
      console.error('Failed to fetch images:', error);
      setLoading(false); // 오류가 발생해도 로딩 상태를 false로 설정
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
  }, [contentId, numOfImages]);

  return { randomImages, loading }; // randomImages와 loading 상태를 반환
};

export default useRandomImages;
