import { useNavigate } from 'react-router-dom';
import TripCard from './TripCard';

export default function MyTripRoute() {
  const trips = [
    {
      title: '경주여행',
      date: '2024.04.12~2024.04.14',
      places: '1개의 장소',
      imageUrl: './src/assets/mainImage.png',
    },
    {
      title: '경주여행',
      date: '2024.04.12~2024.04.14',
      places: '5개의 장소',
      imageUrl: './src/assets/mainImage.png',
    },
    {
      title: '경주여행',
      date: '2024.04.12~2024.04.14',
      places: '3개의 장소',
      imageUrl: './src/assets/mainImage.png',
    },
    {
      title: '경주여행',
      date: '2024.04.12~2024.04.14',
      places: '4개의 장소',
      imageUrl: './src/assets/mainImage.png',
    },
    {
      title: '경주여행',
      date: '2024.04.12~2024.04.14',
      places: '1개의 장소',
      imageUrl: './src/assets/mainImage.png',
    },
  ];
  const navigate = useNavigate();

  const backClick = () => {
    navigate('/');
  };
  return (
    <div className="w-full h-full bg-blue-50 overflow-scroll">
      <div className="w-full p-10">
        <div
          onClick={backClick}
          className="text-blue-800 font-bold cursor-pointer"
        >
          뒤로가기
        </div>
        <div className="text-center text-2xl text-brown-600 font-bold mt-14">
          <h2>지난 여행</h2>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-start w-[850px]">
          {trips.map((trip, index) => (
            <TripCard
              key={index}
              title={trip.title}
              date={trip.date}
              places={trip.places}
              imageUrl={trip.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
