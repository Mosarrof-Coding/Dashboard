/* eslint-disable no-unused-vars */
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../api/apiRoom";
import Tablerow from "./Tablerow";
import CreatRoomsForm from "./CreatRoomsForm";

function Table() {
  const { data, isLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
  //   console.log(data);
  if (isLoading) return <div className="text-green-600">loading...</div>;
  return (
    <>
      {/*<!-- Component: Responsive Table --> */}
      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellSpacing="0"
      >
        <tbody>
          <tr>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              image
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Name
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Capacity
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Price
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Discount
            </th>
            <th
              scope="col"
              className="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Remove
            </th>
          </tr>
          {data.map((room) => (
            <Tablerow key={room.id} room={room} />
          ))}
        </tbody>
      </table>
      {/*<!-- End Responsive Table --> */}
      <div>
        <CreatRoomsForm />
      </div>
    </>
  );
}
export default Table;
