import { TripPlanSideBar } from '../../components';
import { TripRouteCard } from '../../components';
import useDateStore from '../../../stores/useDateStore';
import useTourismDataStore from '../../../stores/useTourismDataStore';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function InsertTripRouteTwo() {
  const { selectedDates } = useDateStore();
  const { selectedTourismItem, tourismData } = useTourismDataStore();
  console.log(tourismData);
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-between w-full h-full">
      <TripPlanSideBar />
      <div className="flex-grow px-8 py-10 space-y-10 box-border w-full h-auto overflow-scroll">
        <div className="flex flex-col justify-evenly items-center w-full h-full">
          {selectedDates.map((date, index) => (
            <TripRouteCard
              key={index}
              day={`day${index + 1}`}
              selectedTourismItem={selectedTourismItem}
            />
          ))}
        </div>
        <div className="flex w-full h-auto justify-end px-10 box-border">
          <Button variant="contained" className="" onClick={handleComplete}>
            완료
          </Button>
        </div>
      </div>
    </div>
  );
}
