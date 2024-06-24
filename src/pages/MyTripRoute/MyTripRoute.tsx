import { useNavigate } from 'react-router-dom';
import { TripCard } from '../../components';
import useTourismDataStore, {
  TripRecord,
} from '../../../stores/useTourismDataStore';
import { useEffect } from 'react';

export default function MyTripRoute() {
  const { tripRecords, loadTourismDataFromLocalStorage } =
    useTourismDataStore();
  const navigate = useNavigate();

  const backClick = () => {
    navigate('/');
  };

  useEffect(() => {
    loadTourismDataFromLocalStorage();
  }, [loadTourismDataFromLocalStorage]);

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
        <div className="flex flex-col items-start w-[950px]">
          {tripRecords.map((record: TripRecord) => (
            <div key={record.id} className="mb-10 w-full">
              {Object.keys(record.dayRoutes).map((day) => (
                <div key={day} className="mb-10 w-full">
                  <div className="text-xl font-bold mb-4">{day}</div>
                  {record.dayRoutes[day].map((trip) => (
                    <TripCard
                      key={trip.contentid}
                      title={trip.title}
                      places={trip.addr1}
                      imageUrl={
                        trip.firstimage ? trip.firstimage : trip.firstimage2
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
