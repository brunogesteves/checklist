import React, { useEffect, useState } from "react";
import { TableColumn } from "react-data-table-component";

import { ListGuestProps } from "@/utils/types";
import { useInfo } from "@/contexts/context";

export const useLogic = () => {
  const { guests } = useInfo();
  const columns: TableColumn<ListGuestProps>[] = [
    {
      name: "FirstName",
      selector: (row) =>
        row.firstName[0].toUpperCase() + row.firstName.slice(1),
      sortable: true,
      width: "120px",
    },
    {
      name: "Lastname",
      selector: (row) => row.lastName[0].toUpperCase() + row.lastName.slice(1),
      sortable: true,
      width: "120px",
    },
    {
      name: "Company Name",
      selector: (row) =>
        row.companyName
          ? row.companyName[0].toUpperCase() + row.companyName.slice(1)
          : row.companyName,

      sortable: true,
      width: "auto",
    },
    {
      name: "Role",
      selector: (row) =>
        row.role ? row.role[0].toUpperCase() + row.role.slice(1) : row.role,
      sortable: true,
      width: "auto",
    },
    // {
    //   name: "Event",
    //   selector: (row) =>
    //     row.name[0].toUpperCase() + row.slice(1),
    //   sortable: true,
    //   width: "100px",
    // },

    {
      name: "Check In - Check Out",
      width: "175px",

      cell: (row) => (
        <button
          type="button"
          onClick={() => checkTtimeNow(row.id)}
          className="inline-block rounded bg-[#01a292] w-full px-2 pb-1 my-2 pt-2.5 text-xs font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          {row.firstName}
          {"   "}
          {row.lastName}
          <br />
          {row.check.toString()}
        </button>
      ),
    },
    {
      name: "Time",
      selector: (row) => row.time,
      width: "150px",
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "none",
      },
    },

    head: {
      style: {
        minHeight: "72px",
        backgroundColor: "#23286c",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        color: "#fff",
        fontSize: "15px",
        border: "none",
        backgroundColor: "#23286c",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
    rows: {
      style: {
        "&:nth-child(even)": {
          backgroundColor: "#4b50b6",
        },
        backgroundColor: "#353ca6",
        color: "#fff",
        fontSize: "15px",
        border: "none",
      },
    },
    pagination: {
      style: {
        background: "#353ca6",
        color: "#fff",
        fontSize: "15px",
      },
      pageButtonsStyle: {
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        padding: "8px",
        margin: "px",
        cursor: "pointer",
        transition: "0.4s",
        color: "#ff0",
        fill: "#fff",
        "&:disabled": {
          cursor: "unset",
          color: "#b3b6ba",
          fill: "#b3b6ba",
        },
        "&:hover:not(:disabled)": {
          color: "#01a292",
          fill: "#01a292",
        },
        "&:focus": {
          outline: "none",
          color: "#fff",
          fill: "#fff",
        },
      },
    },
  };

  function checkTtimeNow(id: number) {
    // const tempGuests = allGuests;
    // // console.log(tempGuests);
    // // tempGuests.forEach((guest: ListGuestProps, index: number) => {

    // if (!tempGuests[id - 1].check) {
    //   tempGuests[id - 1].time = timeNow;
    //   tempGuests[id - 1].check = true;
    // } else {
    //   tempGuests[id - 1].time = "";
    //   tempGuests[id - 1].check = false;
    // }
    // //   }
    // // });

    // console.log(tempGuests[0].check);
    console.log(guests[0].check);
    // setAllGuests(guests=>[...guests,guests[0].]);

    // for (let i = 0; i < allCompanies.length; i++) {
    //   allCompanies[i].checkedInGuest = 0;
    // }

    // allGuests?.forEach((guest) => {
    //   if (guest.check) {
    //     allCompanies.forEach((company) => {
    //       if (company.companyName === guest.companyName) {
    //         company.checkedInGuest += 1;
    //       }
    //     });
    //   }
    // });
  }

  // useEffect(() => {
  //   setOldFilteredList(completeList);
  // }, [selectedEvent]);

  // useEffect(() => {
  //   if (searchGuest) {
  //     const newTemporaryFilteredList = finalList.filter(
  //       (guest: { firstName: string }) =>
  //         guest.firstName
  //           .toLocaleLowerCase()
  //           .includes(searchGuest.toLocaleLowerCase())
  //     );
  //     setFilteredList(newTemporaryFilteredList);
  //   } else {
  //     setFilteredList(oldFilteredList);
  //   }
  // }, [searchGuest]);

  // const finalList = filteredList.length > 0 ? filteredList : completeList;

  return {
    data: {
      columns,
      customStyles,
      // finalList,
      guests,
    },
  };
};
