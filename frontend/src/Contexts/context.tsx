import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_ALL_EVENTS, GET_ALL_GUESTS } from '../GraphQl/Queries';
import {
  ItemCompanyProps,
  ListEventsProps,
  ListItemsProps,
} from '../../@types';
import { InfoContext } from '../Contexts/infoContext';

export const InfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [timeNow, setTimeNow] = useState<string>('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [allEvents, setAllEvents] = useState<ListEventsProps[]>([]);
  const [completeList, setCompleteList] = useState<ListItemsProps[]>([]);
  const [filteredList, setFilteredList] = useState<ListItemsProps[]>([]);
  const [allCompanies, setAllCompanies] = useState<ItemCompanyProps[]>([]);
  const [searchGuest, setSearchGuest] = useState('');
  const [totalGuests, setTotalGuests] = useState<number>(0);

  const { data: dataEvents } = useQuery(GET_ALL_EVENTS);
  const { data: dataGuests } = useQuery(GET_ALL_GUESTS);

  setInterval(() => {
    const date = new Date();
    const dateFormat = new Intl.DateTimeFormat('pt-BR', {
      year: '2-digit',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    });

    setTimeNow(dateFormat.format(date));
  }, 1000);

  useEffect(() => {
    const temporaryList: any[] = [];

    dataEvents?.getEvents.forEach((event: ListEventsProps) => {
      temporaryList.push({
        name: event.name,
        invitationId: event.invitationId,
      });
    });

    setAllEvents(temporaryList);
  }, [dataEvents]);

  useEffect(() => {
    const temporaryList: ListItemsProps[] = dataGuests?.getGuests.map(
      (data) => {
        return {
          ...data,
          event: 'N/A',
          check: 'N/A',
          time: 'N/A',
        };
      }
    );

    const temporaryCompaniesList: string[] = [];
    for (let i = 0; i < temporaryList?.length; i++) {
      if (
        temporaryCompaniesList?.indexOf(temporaryList[i].companyName) === -1
      ) {
        temporaryCompaniesList?.push(temporaryList[i].companyName);
      }
    }

    setAllCompanies(
      temporaryCompaniesList.map((data) => {
        return {
          companyName: data,
          checkedInGuest: 0,
        };
      })
    );

    for (let i = 0; i < temporaryList?.length; i++) {
      for (let j = 0; j < allEvents?.length; j++) {
        if (temporaryList[i].invitationId === allEvents[j].invitationId) {
          temporaryList[i].event = allEvents[j].name;
        }
      }
    }

    setCompleteList(temporaryList);
  }, [dataGuests]);

  useEffect(() => {
    if (selectedEvent === '') {
      setFilteredList([]);
    } else {
      const filteredGuest = completeList.filter(
        (guests) => guests.event === selectedEvent
      );
      setFilteredList(filteredGuest);
    }
  }, [selectedEvent]);

  return (
    <InfoContext.Provider
      value={{
        timeNow,
        setTimeNow,
        allEvents,
        setAllEvents,
        selectedEvent,
        setSelectedEvent,
        completeList,
        setCompleteList,
        allCompanies,
        setAllCompanies,
        filteredList,
        setFilteredList,
        searchGuest,
        setSearchGuest,
        totalGuests,
        setTotalGuests,
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
