import { useEffect, useState } from 'react';
import { useInfo } from '../../Contexts/context';

export const useLogic = () => {
  const { completeList, selectedEvent, setTotalGuests } = useInfo();
  const [absentGuestsNumber, setAbsentGuestsNumber] = useState(0);
  const [arrivedGuestsNumber, setArrivedGuestsNumber] = useState(0);

  useEffect(() => {
    let absentTemporaryNumber = 0;
    let ArrivedTemporaryNumber = 0;

    if (selectedEvent === '') {
      completeList?.forEach((guest) => {
        if (guest.check === 'N/A' || guest.check === 'Check-Out') {
          absentTemporaryNumber += 1;
        } else if (guest.check === 'Check-In') {
          ArrivedTemporaryNumber += 1;
        }
      });
      setAbsentGuestsNumber(absentTemporaryNumber);
      setArrivedGuestsNumber(ArrivedTemporaryNumber);
      setTotalGuests(absentTemporaryNumber + ArrivedTemporaryNumber);
    } else {
      completeList.forEach((guest) => {
        if (guest.event === selectedEvent) {
          if (guest.check === 'N/A' || guest.check === 'Check-Out') {
            absentTemporaryNumber += 1;
          } else if (guest.check === 'Check-In') {
            ArrivedTemporaryNumber += 1;
          }
        }
      });
      setAbsentGuestsNumber(absentTemporaryNumber);
      setArrivedGuestsNumber(ArrivedTemporaryNumber);
      setTotalGuests(absentTemporaryNumber + ArrivedTemporaryNumber);
    }
  }, [selectedEvent, completeList]);

  return {
    data: {
      absentGuestsNumber,
      arrivedGuestsNumber,
    },
  };
};
