import { useNavigate } from 'react-router-dom';

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
            <div
              key={index}
              className="flex justify-between w-full p-6 box-border bg-white border-2 border-gray-300 rounded-lg mb-6"
            >
              <div className="flex flex-col justify-center items-center">
                <div className="w-50 h-50 rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={trip.imageUrl}
                    alt={trip.title}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-[350px] px-5 box-border ml-10 border-2 border-gray-300 h-auto">
                <div className="font-semibold">{trip.title}</div>
                <div className="font-semibold mt-5">{trip.date}</div>
                <div className="text-blue-500 mt-5">{trip.places}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
