import React, { useContext, useEffect, useState } from "react";

import { ListEventsProps, GuestProps } from "@/utils/types";
import { InfoContext } from "@/contexts/infoContext";
import { api } from "@/utils/api";

export const InfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [timeNow, setTimeNow] = useState<string>("");
  const [allEvents, setAllEvents] = useState<ListEventsProps[]>([]);
  const [guests, setGuests] = useState<GuestProps[]>([]);
  const [perPage, setPerPage] = useState<number>(10);
  const [skip, setSkip] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [searchByEvent, setSearchByEvent] = useState<string>("");
  const [totalGuests, setTotalGuests] = useState<number>(0);
  const [hasArrivedGuestNumber, setHasArrivedGuestNumber] = useState<number>(0);
  const [openGuestProfileModal, setOpenGuestProfileModal] = useState(false);
  const [searchByStatus, setSearchByStatus] = useState<string>("");
  const [infoUniqueGuest, setInfoUniqueGuest] = useState<GuestProps>({
    firstName: "",
    id: 0,
    lastName: "",
    role: "",
    companyName: "",
    check: false,
    time: "",
    invitation: "",
  });

  const dateFormat = new Intl.DateTimeFormat("pt-BR", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  function guestChecked(id: number) {
    const time = timeNow;
    let tempGuests = guests;
    tempGuests = guests;
    api.put("/guests/check", { time, id }).then((res) => {
      if (res.data) {
        tempGuests.forEach((guest, i) => {
          if (guest.id === id) {
            tempGuests[i].check = res.data.data.check;
            setGuests([]);
            setGuests(tempGuests);
            countCheckIn();
          }
        });
      }
    });
  }

  function countCheckIn() {
    console.log("arrvie");
    let tempArrived = 0;
    guests.forEach((guest) => {
      if (guest.check === true) {
        tempArrived += 1;
      }
    });
    setHasArrivedGuestNumber(tempArrived);
  }

  useEffect(() => {
    if (skip === 0) setSkip(0);
    if (skip > totalGuests) setSkip(totalGuests);
    setInterval(() => {
      setTimeNow(dateFormat.format(new Date()));
    }, 1000);

    api.get("/events").then((res) => setAllEvents(res.data.getEvents));

    api
      .get("/guests", {
        params: { perPage, skip, search, searchByEvent, searchByStatus },
      })
      .then((res) => {
        setGuests(res?.data?.guests);
        setTotalGuests(res.data.totalGuests);
      });
  }, [perPage, skip, search, searchByEvent, searchByStatus]);

  useEffect(() => {
    countCheckIn();
  }, []);

  useEffect(() => {
    if (infoUniqueGuest.firstName !== "") setOpenGuestProfileModal(true);
  }, [infoUniqueGuest]);
  return (
    <InfoContext.Provider
      value={{
        timeNow,
        setTimeNow,
        allEvents,
        setAllEvents,
        search,
        setSearch,
        totalGuests,
        guests,
        setGuests,
        perPage,
        setPerPage,
        skip,
        setSkip,
        searchByEvent,
        setSearchByEvent,
        guestChecked,
        hasArrivedGuestNumber,
        setHasArrivedGuestNumber,
        openGuestProfileModal,
        setOpenGuestProfileModal,
        infoUniqueGuest,
        setInfoUniqueGuest,
        searchByStatus,
        setSearchByStatus,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export default InfoProvider;

export function useInfo() {
  const useInfo = useContext(InfoContext);
  return useInfo;
}
