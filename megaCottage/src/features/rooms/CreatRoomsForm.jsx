import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { creatRoom } from "../../api/apiRoom";
import toast from "react-hot-toast";

export default function CreatRoomsForm() {
  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: creatRoom,
    onSuccess: () => {
      toast.success("Rooms successfully Added");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
    mutationKey: ["creatRoom"],
  });

  function onSubmit(data) {
    console.log(data);
    mutate({ ...data });
    reset();
  }

  return (
    <>
      <form
        action=""
        className="border-2 p-2 rounded-lg mt-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="formtxt text-xl font-semibold">Add a Room Form</h2>
        <div className="relative my-6">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="name"
            className="peer"
            {...register("name", { required: true })}
          />
          <label htmlFor="name" className="formLabel">
            Name
          </label>
        </div>
        <div className="relative my-6">
          <input
            id="maxCapacity"
            type="number"
            name="maxCapacity"
            placeholder="max Capacity"
            className="peer"
            {...register("maxCapacity", { required: true })}
          />
          <label htmlFor="maxCapacity" className="formLabel">
            maxCapacity
          </label>
        </div>
        <div className="relative my-6">
          <input
            id="regularPrice"
            type="number"
            name="regularPrice"
            placeholder="regular Price"
            className="peer"
            {...register("regularPrice", { required: true })}
          />
          <label htmlFor="regularPrice" className="formLabel">
            regularPrice
          </label>
        </div>
        <div className="relative my-6">
          <input
            id="discount"
            type="number"
            name="discount"
            placeholder="discount"
            className="peer"
            {...register("discount", { required: true })}
          />
          <label htmlFor="discount" className="formLabel">
            discount
          </label>
        </div>
        <div className="relative my-6">
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            className="file-input text-sm h-11 file-input-bordered file-input-primary w-full max-w-xs"
            {...register("image")}
          />
        </div>
        <div className="relative my-6 flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 leading-normal text-lg bg-blue-600 hover:bg-[#4A00FF] rounded-lg text-white"
          >
            Add a New Room
          </button>
          <button
            type="reset"
            className="px-8 leading-normal text-lg bg-blue-600 hover:bg-[#4A80FF] rounded-lg text-white"
          >
            {isLoading ? "Cancel..." : "Cancel"}
          </button>
        </div>
      </form>
    </>
  );
}
