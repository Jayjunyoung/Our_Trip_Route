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
      <div className="flex flex-col items-center w-full h-auto">
        {tripRecords.map((record: TripRecord) => (
          <div key={record.id} className="mb-16 w-3/5">
            <div className="flex flex-col justify-center items-start border-4 w-full bg-slate-200 border-sky-100">
              {Object.keys(record.dayRoutes).map((day) => (
                <div
                  key={record.id + day}
                  className="flex flex-col items-center w-full my-4 box-border"
                >
                  <div className="text-xl text-center font-bold mb-4">
                    {day}
                  </div>
                  <div className="flex flex-wrap justify-center">
                    {record.dayRoutes[day].map((trip) => (
                      <TripCard
                        key={`${record.id}-${day}-${trip.contentid}`}
                        title={trip.title}
                        places={trip.addr1}
                        imageUrl={
                          trip.firstimage ? trip.firstimage : trip.firstimage2
                        }
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <hr className="border-t-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-10 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
