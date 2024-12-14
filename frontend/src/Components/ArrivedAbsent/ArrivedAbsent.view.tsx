import { useInfo } from "../../Contexts/context";
import React from "react";

export const ArrivedAbsent = () => {
  const { totalGuests, hasArrivedGuestNumber } = useInfo();
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-[#1d206f] flex justify-center items w-3/4 h-64 rounded-3xl mb-5 ">
          <div className="w-1/2 flex justify-center items-center flex-col text-white ">
            <span className="text-2xl font-bold">Arrived</span>
            <span className="text-xl ">Guests</span>
            <span className="text-5xl my-4 font-bold">
              {hasArrivedGuestNumber}
            </span>
          </div>
          <div className="w-[1px] bg-white my-9 opacity-20"></div>
          <div className="w-1/2 flex justify-center items-center flex-col text-white ">
            <span className="text-2xl font-bold">Absent</span>
            <span className="text-xl ">Guests</span>
            <span className="text-5xl my-4 font-bold">
              {totalGuests - hasArrivedGuestNumber}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
