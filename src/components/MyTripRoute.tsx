export default function MyTripRoute() {
  return (
    <div className="w-full h-full bg-[#F9F5F5] overflow-scroll">
      <div className="w-full h-auto p-10">
        <div className="flex justify-start w-full text-[#F4B9B9] font-bold">
          뒤로가기
        </div>
        <div className="flex justify-center w-full mt-14 text-2xl text-[#9C6E4D] font-bold">
          <h2>지난 여행</h2>
        </div>
      </div>
      <div className="flex justify-center w-full h-auto">
        <div className="flex flex-col items-start h-auto">
          <div className="flex justify-between w-[1000px] h-[150px]">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center w-[200px] h-[200px] rounded-xl">
                <img className="w-full" src="./src/assets/mainImage.png" />
              </div>
            </div>
            <div className="flex flex-col justify-evenly items-start w-[350px] h-full ml-10">
              <div className="font-semibold">경주여행</div>
              <div className="font-semibold">2024.04.12~2024.04.14</div>
              <div className="text-[#F87D24]">1개의 장소</div>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex justify-between w-[1000px] h-[150px] mt-5">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center w-[200px] h-[200px] rounded-xl">
                <img className="w-full" src="./src/assets/mainImage.png" />
              </div>
            </div>
            <div className="flex flex-col justify-evenly items-start w-[350px] h-full ml-10">
              <div className="font-semibold">경주여행</div>
              <div className="font-semibold">2024.04.12~2024.04.14</div>
              <div className="text-[#F87D24]">2개의 장소</div>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex justify-between w-[1000px] h-[150px] mt-5">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center w-[200px] h-[200px] rounded-xl">
                <img className="w-full" src="./src/assets/mainImage.png" />
              </div>
            </div>
            <div className="flex flex-col justify-evenly items-start w-[350px] h-full ml-10">
              <div className="font-semibold">경주여행</div>
              <div className="font-semibold">2024.04.12~2024.04.14</div>
              <div className="text-[#F87D24]">3개의 장소</div>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex justify-between w-[1000px] h-[150px] mt-5">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center w-[200px] h-[200px] rounded-xl">
                <img className="w-full" src="./src/assets/mainImage.png" />
              </div>
            </div>
            <div className="flex flex-col justify-evenly items-start w-[350px] h-full ml-10">
              <div className="font-semibold">경주여행</div>
              <div className="font-semibold">2024.04.12~2024.04.14</div>
              <div className="text-[#F87D24]">3개의 장소</div>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex justify-between w-[1000px] h-[150px] mt-5">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center w-[200px] h-[200px] rounded-xl">
                <img className="w-full" src="./src/assets/mainImage.png" />
              </div>
            </div>
            <div className="flex flex-col justify-evenly items-start w-[350px] h-full ml-10">
              <div className="font-semibold">경주여행</div>
              <div className="font-semibold">2024.04.12~2024.04.14</div>
              <div className="text-[#F87D24]">3개의 장소</div>
            </div>
          </div>
          <hr className="w-full" />
        </div>
      </div>
    </div>
  );
}
