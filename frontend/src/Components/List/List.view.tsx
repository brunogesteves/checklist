import React from "react";
import DataTable from "react-data-table-component";
import { useLogic } from "./List.logic";

export const List = () => {
  const { data } = useLogic();

  return (
    <>
      {data.allGuests ? (
        <DataTable
          columns={data.columns}
          data={data.allGuests}
          customStyles={data.customStyles}
          pagination
          fixedHeaderScrollHeight="22"
          responsive={true}
        />
      ) : (
        <div className="text-white w-full text-center text-3xl">No Results</div>
      )}
    </>
  );
};
