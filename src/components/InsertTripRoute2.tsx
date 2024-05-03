import { Button, Input } from '@mui/material';

export default function InsertTripRoute2() {
  const ariaLabel = { 'aria-label': 'description' };

  return (
    <div className="flex justify-between w-full h-full overflow-scroll">
      <div className="flex flex-col justify-evenly items-center w-[300px] h-full bg-[#F9F5F5]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-between items-center">
            <img
              className="transition-transform duration-300 ease-in-out hover:scale-110"
              src="../src/assets/icon.png"
            />
            <span className="font-semibold mt-5">현재 위치</span>
          </div>
          <div className="flex flex-col justify-between items-center mt-8">
            <img
              className="transition-transform duration-300 ease-in-out hover:scale-110"
              src="../src/assets/icon2.png"
            />
            <span className="font-semibold mt-5">최근 여행 경로</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-between items-center mt-8">
            <img
              className="transition-transform duration-300 ease-in-out hover:scale-110"
              src="../src/assets/icon3.png"
            />
            <span className="font-semibold mt-5">여행 경로 지정</span>
          </div>
        </div>
      </div>
      <div className="flex-grow px-20 py-20 space-y-20">
        <div className="flex justify-center items-center w-full ">
          <div className="bg-white shadow p-6 w-[780px] min-w-[780px]">
            <div className="text-xl font-bold mb-4">day1</div>
            <div className="flex justify-between items-center space-x-4">
              <Input placeholder="Placeholder" inputProps={ariaLabel} />
              <Input placeholder="Placeholder" inputProps={ariaLabel} />
              <Button variant="outlined">장소추가</Button>
              <Button variant="outlined">장소삭제</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="bg-white shadow p-6 w-[780px] min-w-[780px]">
            <div className="text-xl font-bold mb-4">day2</div>
            <div className="flex justify-between items-center space-x-4">
              <Input placeholder="Placeholder" inputProps={ariaLabel} />
              <Input placeholder="Placeholder" inputProps={ariaLabel} />
              <Button variant="outlined">장소추가</Button>
              <Button variant="outlined">장소삭제</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full ">
          <div className="bg-white shadow p-6 w-[780px] min-w-[780px]">
            <div className="text-xl font-bold mb-4">day3</div>
            <div className="flex justify-between items-center space-x-4">
              <Input placeholder="Placeholder" inputProps={ariaLabel} />
              <Input placeholder="Placeholder" inputProps={ariaLabel} />
              <Button variant="outlined">장소추가</Button>
              <Button variant="outlined">장소삭제</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full ">
          <div className="bg-white shadow p-6 w-[780px] min-w-[780px]">
            <div className="text-xl font-bold mb-4">day4</div>
            <div className="flex justify-between items-center space-x-4">
              <Input placeholder="Placeholder" inputProps={ariaLabel} />
              <Input placeholder="Placeholder" inputProps={ariaLabel} />
              <Button variant="outlined">장소추가</Button>
              <Button variant="outlined">장소삭제</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
