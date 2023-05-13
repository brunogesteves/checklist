import React, { useEffect, useState } from 'react';
import { useInfo } from '../../Contexts/context';
import { useLogic } from './ArrivedAbsent.logic';

interface PP {
  checkedInGuest: number;
  companyName: string;
}

export const ArrivedAbsent = () => {
  const { data } = useLogic();
  const { allCompanies, selectedEvent } = useInfo();

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-[#1d206f] flex justify-center items w-3/4 h-64 rounded-3xl mb-5 ">
          <div className="w-1/2 flex justify-center items-center flex-col text-white ">
            <span className="text-2xl font-bold">Arrived</span>
            <span className="text-xl ">Guests</span>
            <span className="text-5xl my-4 font-bold">
              {data.arrivedGuestsNumber}
            </span>
          </div>
          <div className="w-[1px] bg-white my-9 opacity-20"></div>
          <div className="w-1/2 flex justify-center items-center flex-col text-white ">
            <span className="text-2xl font-bold">Absent</span>
            <span className="text-xl ">Guests</span>
            <span className="text-5xl my-4 font-bold">
              {data.absentGuestsNumber}
            </span>
          </div>
        </div>
      </div>
      {!selectedEvent ? (
        <div className="flex justify-center">
          <div className="bg-[#1d206f]  items w-3/4 h-auto rounded-3xl mb-5 py-2 pl-4">
            <p className="text-white text-xl font-bold">
              Check In By Companies
            </p>
            <div className="text-left ">
              {allCompanies?.sort().map((company, i: number) => {
                if (company.checkedInGuest > 0) {
                  return (
                    <p className="text-white my-3" key={i}>
                      {company?.companyName}
                      {' : '}
                      {company?.checkedInGuest}{' '}
                      {company?.checkedInGuest > 1 ? 'Guests' : 'Guest'}
                    </p>
                  );
                }
              })}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
