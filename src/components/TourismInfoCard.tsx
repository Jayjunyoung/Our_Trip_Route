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
    <div className="flex flex-col items-center w-36 h-40 max-h-40 max-w-36">
      <div className="flex flex-col items-center w-full h-full">
        <img src={image} className="w-full h-full rounded-lg" />
      </div>
      <h2 className="text-center mt-5">{title}</h2>
      <div className="mt-5">주소: {address}</div>
    </div>
  );
}
