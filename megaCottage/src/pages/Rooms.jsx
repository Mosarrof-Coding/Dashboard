// import { useEffect } from "react";
// import { getRooms } from "../api/apiRoom";
import Table from "../features/rooms/Table";

function Rooms() {
  // useEffect(() => {
  //   getRooms().then((data) => console.log(data));
  // }, []);
  return (
    <>
      <div className="mt-20 lg:mt-4">
        <Table />
      </div>
    </>
  );
}

export default Rooms;
