import React, { useEffect } from 'react';
import useTourismDataStore from '../../stores/useTourismDataStore';

interface TripCardProps {
  title: string;
  places?: string;
  imageUrl?: string;
}

export default function TripCard({ title, places, imageUrl }: TripCardProps) {
  return (
    <div className="flex justify-between w-full p-6 box-border bg-white border-2 border-gray-300 rounded-lg mb-6">
      <div className="flex flex-col justify-center items-center">
        <div className="w-50 h-50 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={imageUrl === '' ? '' : imageUrl}
            alt={title}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[350px] px-5 box-border ml-10 border-2 border-gray-300 h-auto">
        <div className="font-semibold text-center">{title}</div>
        <div className="text-blue-500 mt-5">{places}</div>
      </div>
    </div>
  );
}
