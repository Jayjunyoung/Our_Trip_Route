import { Button, Input } from '@mui/material';
import LeftSideBar from './LeftSideBar';

export default function InsertTripRoute2() {
  const ariaLabel = { 'aria-label': 'description' };

  return (
    <div className="flex justify-between w-full h-full overflow-scroll">
      <LeftSideBar />
      <div className="flex-grow px-8 py-10 space-y-10">
        <div className="flex flex-col justify-evenly items-center w-full h-full">
          <div className="flex justify-center items-center w-full">
            <div className="bg-white shadow-lg border-2 border-gray-400 p-6 w-[850px] min-w-[850px]">
              <div className="text-xl font-bold mb-4">day2</div>
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
          <div className="flex justify-center items-center w-full">
            <div className="bg-white shadow-lg border-2 border-gray-400 p-6 w-[850px] min-w-[850px]">
              <div className="text-xl font-bold mb-4">day2</div>
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
          <div className="flex justify-center items-center w-full">
            <div className="bg-white shadow-lg border-2 border-gray-400 p-6 w-[850px] min-w-[850px]">
              <div className="text-xl font-bold mb-4">day2</div>
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
          <div className="flex justify-center items-center w-full">
            <div className="bg-white shadow-lg border-2 border-gray-400 p-6 w-[850px] min-w-[850px]">
              <div className="text-xl font-bold mb-4">day2</div>
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
        </div>
      </div>
    </div>
  );
}
