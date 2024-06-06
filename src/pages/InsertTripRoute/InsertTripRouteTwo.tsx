import { TripPlanSideBar } from '../../components';
import { TripRouteCard } from '../../components';

export default function InsertTripRoute2() {
  const days = ['day1', 'day2', 'day3', 'day4'];

  return (
    <div className="flex justify-between w-full h-full overflow-scroll">
      <TripPlanSideBar />
      <div className="flex-grow px-8 py-10 space-y-10 box-border w-full">
        <div className="flex flex-col justify-evenly items-center w-full h-full">
          {days.map((day, index) => (
            <TripRouteCard key={index} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
}
