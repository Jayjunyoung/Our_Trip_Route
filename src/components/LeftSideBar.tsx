export default function LeftSideBar() {
  return (
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
  );
}
