interface TourismInfoProps {
  title: string;
  image: string;
  address?: string;
}

export default function TourismInfoCard({
  title,
  image,
  address,
}: TourismInfoProps) {
  return (
    <div className="flex flex-col items-center w-44 h-44 max-h-44 max-w-44">
      <div className="flex flex-col items-center w-full h-full">
        <img src={image} className="w-full h-full rounded-lg" />
      </div>
      <h2 className="text-center font-bold mt-5">{title}</h2>
      <div className="mt-5 font-medium">주소: {address}</div>
    </div>
  );
}
