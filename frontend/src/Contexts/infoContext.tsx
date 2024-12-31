import { createContext } from "react";

import { ListGuestProps, ListEventsProps } from "../../@types";

interface InfoProps {
  timeNow: string;
  setTimeNow: (c: string) => void;
  allEvents: ListEventsProps[];
  setAllEvents: (c: ListEventsProps[]) => void;
  search: string;
  setSearch: (c: string) => void;
  totalGuests: number;
  guests: ListGuestProps[];
  setGuests: (c: ListGuestProps[]) => void;
  perPage: number;
  setPerPage: (c: number) => void;
  skip: number;
  setSkip: (c: number) => void;
  searchByEvent: string;
  setSearchByEvent: (c: string) => void;
  guestChecked: (id: number) => void;
  hasArrivedGuestNumber: number;
  setHasArrivedGuestNumber: (id: number) => void;
  searchByStatus: string;
  setSearchByStatus: (c: string) => void;
}

export const InfoContext = createContext<InfoProps>({
  timeNow: "",
  setTimeNow: () => {},
  allEvents: [],
  setAllEvents: () => {},
  search: "",
  setSearch: () => {},
  totalGuests: 0,
  guests: [],
  setGuests: () => {},
  perPage: 5,
  setPerPage: () => {},
  skip: 0,
  setSkip: () => {},
  searchByEvent: "",
  setSearchByEvent: () => {},
  guestChecked: () => {},
  hasArrivedGuestNumber: 0,
  setHasArrivedGuestNumber: () => {},
  searchByStatus: "",
  setSearchByStatus: () => {},
});
