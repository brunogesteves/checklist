import React, { useState } from 'react';
import { List } from '../List/List.view';
import { useInfo } from '../../Contexts/context';

export const GuestList = () => {
  const { setSearchGuest, searchGuest } = useInfo();
  return (
    <div className="w-full h-auto p-5">
      <input
        type="text"
        value={searchGuest}
        placeholder="Find A Guest"
        onChange={(e) => setSearchGuest(e.target.value)}
        className="bg-[#323890] rounded-2xl w-full py-3 text-white pl-3 placeholder:text-white placeholder:opacity-50 mb-5 focus:outline-none"
      />
      <List />
    </div>
  );
};
