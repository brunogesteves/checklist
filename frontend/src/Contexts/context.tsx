import React, { useContext, useEffect, useState } from "react";

import { ListEventsProps, ListGuestProps } from "../../@types";
import { InfoContext } from "../Contexts/infoContext";
import { api } from "../utils/api.ts";

export const InfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [timeNow, setTimeNow] = useState<string>("");
  const [allEvents, setAllEvents] = useState<ListEventsProps[]>([]);
  const [guests, setGuests] = useState<ListGuestProps[]>([]);
  const [perPage, setPerPage] = useState<number>(5);
  const [skip, setSkip] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [searchByEvent, setSearchByEvent] = useState<string>("");
  const [searchByStatus, setSearchByStatus] = useState<string>("");
  const [totalGuests, setTotalGuests] = useState<number>(0);
  const [hasArrivedGuestNumber, setHasArrivedGuestNumber] = useState<number>(0);
  const dateFormat = new Intl.DateTimeFormat("pt-BR", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  async function getGuests() {
    await api
      .get("/guests", {
        params: { perPage, skip, search, searchByEvent, searchByStatus },
      })
      .then((res) => {
        setGuests(res?.data?.guests);
        setTotalGuests(res.data.totalGuests);
      });
  }

  function guestChecked(id: number) {
    const time = timeNow;
    let tempGuests = guests;

    api.put("/guests/check", { time, id }).then((res) => {
      if (res.data) {
        tempGuests.forEach((guest, i) => {
          if (guest.id === id) {
            tempGuests[i].check = res.data.data.check;
          }
        });
      }
    });
    setGuests(tempGuests);
  }

  useEffect(() => {
    let tempArrived = 0;
    console.log(guests.length);
    guests.forEach((guest) => {
      if (guest.check === true) {
        tempArrived += 1;
      }
    });
    setHasArrivedGuestNumber(tempArrived);
  }, [guests]);

  useEffect(() => {
    if (skip === 0) setSkip(0);
    if (skip > totalGuests) setSkip(totalGuests);
    setInterval(() => {
      setTimeNow(dateFormat.format(new Date()));
    }, 1000);

    api.get("/events").then((res) => setAllEvents(res.data.getEvents));

    getGuests();
  }, [perPage, skip, search, searchByEvent, searchByStatus]);

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
