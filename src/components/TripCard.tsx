import { useEffect, useState } from 'react';
import ImageSkeleton from './Skeleton/ImageSkeleton';

interface TripCardProps {
  title: string;
  places?: string;
  imageUrl?: string;
}

export default function TripCard({ title, places, imageUrl }: TripCardProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [imageUrl]);
  return (
    <div className="flex flex-col w-[320px] h-[400px] p-4 box-border bg-white shadow-lg border border-gray-300 rounded-lg mb-6 mx-4">
      <div className="w-full h-64 rounded-t-lg overflow-hidden">
        {loading && <ImageSkeleton />}
        <img
          className={`w-full h-full object-cover min-w-[285px] ${loading ? 'hidden' : 'block'}`}
          src={
            imageUrl === '' ? 'https://i.ibb.co/kXW1Zjq/empty.png' : imageUrl
          }
          alt={title}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)} // 로딩 실패 시 로딩 상태를 업데이트합니다.
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-4">
        <div className="font-semibold text-center text-lg">{title}</div>
        <div className="text-blue-500 mt-2 text-center">{places}</div>
      </div>
    </div>
  );
}
