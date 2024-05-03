import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate(); //useNavigate() 호출 후 navigate 변수에 저장

  const onClickHeader = () => {
    navigate('/myTripRoute');
  };
  return (
    <div className="flex justify-around w-full h-auto text-white">
      <div className="flex justify-evenly items-center w-[200px] h-[150px]">
        <div
          className="w-full flex justify-center cursor-pointer"
          onClick={() => navigate('/')}
        >
          Home
        </div>
        <div
          className="w-full flex justify-center cursor-pointer"
          onClick={() => navigate('/insertTripRoute2')}
        >
          Google Map
        </div>
      </div>
      <div className="flex justify-evenly items-center w-[250px] h-[150px]">
        <div
          className="w-full flex justify-center cursor-pointer"
          onClick={() => navigate('/insertTripRoute')}
        >
          여행 경로 지정
        </div>
        <div
          className="w-full flex justify-center cursor-pointer"
          onClick={onClickHeader}
        >
          나의 여행 경로
        </div>
      </div>
    </div>
  );
}
