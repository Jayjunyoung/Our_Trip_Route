import Header from '../../components/common/Header.tsx';
import useRandomImages from '../../hooks/useRandomImages';
import ImageSkeleton from '../../components/Skeleton/ImageSkeleton';

export default function MainPage() {
  const { randomImages, loading } = useRandomImages('1095732', 3); // 커스텀 훅 사용

  return (
    <div className="relative w-full h-full bg-[url('/assets/mainImage.png')] bg-cover bg-center bg-no-repeat">
      <Header />
      <div className="flex w-full justify-center h-[350px]">
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl font-bold text-slate-50">Our trip route</div>
        </div>
      </div>
      <div className="w-full h-auto px-5">
        <div className="flex justify-center font-semibold text-white">
          국내 인기 관광지
        </div>
        <div className="flex justify-evenly w-full h-[320px] py-5 box-border">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div
                  className="flex flex-col justify-center w-[300px] h-full border-2"
                  key={index}
                >
                  <ImageSkeleton />
                </div>
              ))
            : randomImages.map((imagePath, index) => (
                <div
                  className="flex flex-col justify-center w-[300px] h-full border-2"
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
              height: `${15}px}`,
              opacity: `${Math.random() * (0.6 - 0.2) + 0.2}`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
