import React from 'react';
import { ArrivedAbsent } from '../Components/ArrivedAbsent/ArrivedAbsent.view';
import { GuestList } from '../Components/GuestList/GuestList.view';
import { useInfo } from '../Contexts/context';

export const App = () => {
  const { selectedEvent, timeNow, allEvents, totalGuests, setSelectedEvent } =
    useInfo();

  return (
    <div className="bg-[#353ca6] h-auto pt-10 text-center">
      <select
        className="text-center text-sm focus:outline-none text-white py-2 mb-5 w-1/2 bg-[#23286c]"
        onChange={(e) => setSelectedEvent(e.target.value)}
      >
        <option className=" bg-[#23286c]" value={''}>
          Select an event
        </option>
        {allEvents?.map((event, i: number) => (
          <option
            className="text-white bg-[#23286c]  "
            value={event.name}
            key={i}
          >
            {event.name}
          </option>
        ))}
      </select>
      <h1 className="text-center text-white text-2xl mb-7 h-5">
        {selectedEvent ? 'Event : ' : ''} {selectedEvent}
      </h1>
      <div className="relative h-auto bg-black ">
        <img
          src="./party.jpg"
          alt="party"
          className="w-full object-cover h-72 opacity-25"
        />
        <span className="absolute bottom-10 left-10 text-white font-bold text-5xl">
          {selectedEvent ? 'CheckList : ' : ''} {selectedEvent}
        </span>
        <span className="absolute bottom-10 right-10 text-white font-bold text-5xl">
          {timeNow}
        </span>
      </div>
      <div className="flex justify-center my-5 items-center gap-x-2">
        <span className=" text-white text-3xl font-bold  ">
          You are expecting
        </span>
        <span className="text-4xl text-white font-extrabold">
          {totalGuests}
        </span>
        <span className=" text-white text-3xl font-bold  ">
          {totalGuests > 1 ? 'guests' : 'guest'} in total!
        </span>
      </div>

      <ArrivedAbsent />
      <GuestList />
    </div>
  );
};
