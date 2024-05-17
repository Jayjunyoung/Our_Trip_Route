import { Button, Input } from '@mui/material';

interface DayProps {
  day: string;
}

const TripRouteCard = ({ day }: DayProps) => {
  const ariaLabel = { 'aria-label': 'description' };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-white shadow-lg border-2 border-gray-400 p-6 w-[850px] min-w-[850px]">
        <div className="text-xl font-bold mb-4">{day}</div>
        <div className="flex justify-between items-center space-x-4">
          <Input placeholder="Placeholder" inputProps={ariaLabel} />
          <Input placeholder="Placeholder" inputProps={ariaLabel} />
          <Button variant="outlined">장소추가</Button>
          <Button variant="outlined" color="error">
            장소삭제
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TripRouteCard;
