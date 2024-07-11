import { useEffect, useState } from 'react';
import axios from 'axios';

const useRandomImages = (contentId: string, numOfImages: number) => {
  const [randomImages, setRandomImages] = useState<string[]>([]);

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
  }, [contentId, numOfImages]);

  return randomImages;
};

export default useRandomImages;
