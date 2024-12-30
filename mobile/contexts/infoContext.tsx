import { createContext } from "react";

import { ItemCompanyProps, ListEventsProps, GuestProps } from "@/utils/types";

interface InfoProps {
  timeNow: string;
  setTimeNow: (c: string) => void;
  allEvents: ListEventsProps[];
  setAllEvents: (c: ListEventsProps[]) => void;
  search: string;
  setSearch: (c: string) => void;
  totalGuests: number;
  guests: GuestProps[];
  setGuests: (c: GuestProps[]) => void;
  perPage: number;
  setPerPage: (c: number) => void;
  skip: number;
  setSkip: (c: number) => void;
  searchByEvent: string;
  setSearchByEvent: (c: string) => void;
  guestChecked: (id: number) => void;
  hasArrivedGuestNumber: number;
  setHasArrivedGuestNumber: (id: number) => void;
  openGuestProfileModal: boolean;
  setOpenGuestProfileModal: (newState: boolean) => void;
  infoUniqueGuest: GuestProps;
  setInfoUniqueGuest: (newState: GuestProps) => void;
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
  openGuestProfileModal: false,
  setOpenGuestProfileModal: () => {},
  infoUniqueGuest: {
    firstName: "",
    id: 0,
    lastName: "",
    role: "",
    companyName: "",
    check: false,
    time: "",
    invitation: "",
  },
  setInfoUniqueGuest: () => {},
});
