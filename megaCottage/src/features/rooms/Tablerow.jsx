/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRooms } from "../../api/apiRoom";
import toast from "react-hot-toast";

export default function Tablerow({
  room: { id, name, maxCapacity, regularPrice, discount, image },
}) {
  // const { id, name, maxCapacity, regularPrice, discount, image } = room;
  // console.log(room);

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: deleteRooms,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <>
      <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
        <td
          data-th="Name"
          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
        >
          <img
            className="w-full h-14 object-cover p-1 rounded-lg"
            src={image}
            alt={name}
          />
        </td>
        <td
          data-th="Title"
          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
        >
          {name}
        </td>
        <td
          data-th="Company"
          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
        >
          {maxCapacity}
        </td>
        <td
          data-th="Role"
          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
        >
          {regularPrice}
        </td>
        <td
          data-th="Username"
          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
        >
          {discount}
        </td>
        <td
          data-th=""
          className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
        >
          <div>
            <button
              className="bg-blue-500 text-red-800 px-4 py-1 rounded-md capitalize hover:bg-red-400"
              disabled={isLoading}
              onClick={() => mutate(id)}
            >
              {isLoading ? "Deleting.." : "Remove"}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
