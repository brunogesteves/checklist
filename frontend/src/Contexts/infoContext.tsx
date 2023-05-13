import { createContext } from 'react';

interface ItemCompanyProps {
  companyName: string;
  checkedInGuest: number;
}

interface ListItemsProps {
  check: string;
  companyName: string;
  event: string;
  firstName: string;
  invitationId: string;
  lastName: string;
  role: string;
  time: string;
  id: number;
}

interface InfoProps {
  timeNow: string;
  setTimeNow: (c: string) => void;
  allEvents: string[];
  setAllEvents: (c: string[]) => void;
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
