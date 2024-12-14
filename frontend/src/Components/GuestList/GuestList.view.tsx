import React from "react";
import { useInfo } from "../../Contexts/context";

export const GuestList = () => {
  const {
    setSearch,
    guests,
    allEvents,
    setSkip,
    skip,
    setPerPage,
    setSearchByEvent,
    guestChecked,
  } = useInfo();
  return (
    <div>
      <section className="mb-10 w-full bg-[#353ca6] overflow-y-auto">
        <div className="max-w-screen px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg ">
            <div className="flex items-center justify-between  p-4">
              <div className="flex">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 "
                    type="text"
                  />
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="flex space-x-3 items-center">
                  <select
                    onChange={(e) => setSearchByEvent(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option value="">All Events</option>
                    {allEvents.map((event, i) => {
                      return (
                        <option key={i} value={event.invitationCode}>
                          {event.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      FirstName
                    </th>
                    <th scope="col" className="px-4 py-3">
                      LastName
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Role
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Company Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Event
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Time
                    </th>
                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {guests.map((guest, i) => {
                    return (
                      <tr
                        key={i}
                        className="border-b dark:border-gray-700 text-white"
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {guest.firstName}
                        </th>
                        <td className="px-4 py-3">{guest.lastName}</td>
                        <td className="px-4 py-3 text-green-500">
                          {guest.role}
                        </td>
                        <td className="px-4 py-3">{guest.companyName}</td>
                        {allEvents.map((event, i) => {
                          if (guest.invitation === event.invitationCode) {
                            return (
                              <td key={i} className="px-4 py-3">
                                {event.name}
                              </td>
                            );
                          }
                        })}

                        <td className="px-4 py-3 w-28">
                          <button
                            onClick={() => guestChecked(guest.id)}
                            className="rounded-lg p-1 w-28 bg-green-500"
                          >
                            {" "}
                            {guest.check ? "Chech-in" : "Check-Out"}
                          </button>
                        </td>
                        <td className="px-4 py-3 w-auto">{guest.time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="py-4 px-3">
              <div className="flex">
                <div className="flex space-x-4 items-center mb-3">
                  <label className="w-32 text-sm font-medium text-white">
                    Per Page
                  </label>
                  <select
                    onChange={(e) =>
                      setPerPage(e.target.value as unknown as number)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    {[5, 10, 20, 50, 100].map((page, i) => (
                      <option key={i} value={page}>
                        {page}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-between px-1">
              <button
                onClick={() => setSkip(skip - 1)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 h-14 p-2.5 mb-5"
              >
                Preview
              </button>
              <button
                onClick={() => setSkip(skip + 1)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 h-14 p-2.5 mb-5"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
