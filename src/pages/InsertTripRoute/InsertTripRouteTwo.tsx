import { TripPlanSideBar } from '../../components';
import { TripRouteCard } from '../../components';
import useDateStore from '../../../stores/useDateStore';

export default function InsertTripRoute2() {
  const { selectedDates } = useDateStore();

  return (
    <div className="flex justify-between w-full h-full overflow-scroll">
      <TripPlanSideBar />
      <div className="flex-grow px-8 py-10 space-y-10 box-border w-full">
        <div className="flex flex-col justify-evenly items-center w-full h-full">
          {selectedDates.map((date, index) => (
            <TripRouteCard key={index} day={`day${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
