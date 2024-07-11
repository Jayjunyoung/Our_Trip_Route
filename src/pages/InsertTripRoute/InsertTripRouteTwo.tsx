import { TripPlanSideBar } from '../../components';
import { TripRouteCard } from '../../components';
import useDateStore from '../../../stores/useDateStore';
import useTourismDataStore, {
  TourismItem,
  TripRecord,
} from '../../../stores/useTourismDataStore';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function InsertTripRouteTwo() {
  const { selectedDates } = useDateStore();
  const {
    selectedTourismItem,
    createNewTripRecord,
    saveDayRoute,
    saveTripRecordToLocalStorage,
    dayRoutes,
  } = useTourismDataStore();
  const [tripId, setTripId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const newTripId = createNewTripRecord();
    setTripId(newTripId);
  }, [createNewTripRecord]);

  const handleComplete = () => {
    if (tripId) {
      const tripData: TripRecord = {
        id: tripId,
        dayRoutes,
      };
      saveTripRecordToLocalStorage(tripData);
      navigate('/');
    }
  };

  const handleSaveDayRoute = (day: string, data: TourismItem[]) => {
    if (tripId) {
      saveDayRoute(day, data);
    }
  };

  return (
    <div className="flex justify-between w-full h-full">
      <TripPlanSideBar />
      <div className="flex flex-col flex-grow px-8 py-8 space-y-11 box-border h-auto overflow-scroll">
        <div className="flex flex-col justify-center flex-grow space-y-11">
          {selectedDates.map((index) => (
            <TripRouteCard
              key={index}
              day={`day${index + 1}`}
              selectedTourismItem={selectedTourismItem}
              saveDayRoute={handleSaveDayRoute}
            />
          ))}
        </div>
        <div className="flex justify-end mt-10 mb-10">
          <Button variant="contained" onClick={handleComplete}>
            완료
          </Button>
        </div>
      </div>
    </div>
  );
}
