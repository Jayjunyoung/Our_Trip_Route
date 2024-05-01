export default function Header() {
  return (
    <div className="flex justify-around w-full h-auto text-white">
      <div className="flex justify-evenly items-center w-[200px] h-[150px]">
        <div className="w-full flex justify-center">Home</div>
        <div className="w-full flex justify-center">Google Map</div>
      </div>
      <div className="flex justify-evenly items-center w-[200px] h-[150px]">
        <div className="w-full flex justify-center">인기 관광지</div>
        <div className="w-full flex justify-center">나의 경로</div>
      </div>
    </div>
  );
}
