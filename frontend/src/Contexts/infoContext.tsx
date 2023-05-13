import { createContext } from 'react';

import {
  ItemCompanyProps,
  ListItemsProps,
  ListEventsProps,
} from '../../@types';

interface InfoProps {
  timeNow: string;
  setTimeNow: (c: string) => void;
  allEvents: ListEventsProps[];
  setAllEvents: (c: ListEventsProps[]) => void;
  selectedEvent: string;
  setSelectedEvent: (c: string) => void;
  completeList: ListItemsProps[];
  setCompleteList: (c: ListItemsProps[]) => void;
  allCompanies: ItemCompanyProps[];
  setAllCompanies: (c: ItemCompanyProps[]) => void;
  filteredList: ListItemsProps[];
  setFilteredList: (c: ListItemsProps[]) => void;
  searchGuest: string;
  setSearchGuest: (c: string) => void;
  totalGuests: number;
  setTotalGuests: (c: number) => void;
}

export const InfoContext = createContext<InfoProps>({
  timeNow: '',
  setTimeNow: () => {},
  allEvents: [],
  setAllEvents: () => {},
  selectedEvent: '',
  setSelectedEvent: () => {},
  completeList: [],
  setCompleteList: () => {},
  allCompanies: [],
  setAllCompanies: () => {},
  filteredList: [],
  setFilteredList: () => {},
  searchGuest: '',
  setSearchGuest: () => {},
  totalGuests: 0,
  setTotalGuests: () => {},
});
