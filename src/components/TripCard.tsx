import React from 'react';

interface TripCardProps {
  title: string;
  places?: string;
  imageUrl?: string;
}

export default function TripCard({ title, places, imageUrl }: TripCardProps) {
  return (
    <div className="flex flex-col max-w-[320px] h-[400px] p-4 box-border bg-white shadow-lg border border-gray-300 rounded-lg mb-6 mx-4">
      <div className="w-full h-64 rounded-t-lg overflow-hidden">
        <img
          className="w-full h-full object-cover min-w-[285px]"
          src={
            imageUrl === '' ? 'https://i.ibb.co/kXW1Zjq/empty.png' : imageUrl
          }
          alt={title}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-4">
        <div className="font-semibold text-center text-lg">{title}</div>
        <div className="text-blue-500 mt-2 text-center">{places}</div>
      </div>
    </div>
  );
}
