import supabase from "./supabase";

export async function getRooms() {
  let { data, error } = await supabase.from("rooms").select("*");
  if (error) {
    console.error("Error! rooms couldn't be found");
    throw new Error("Rooms couldn't be found");
  }
  return data;
}

export async function deleteRooms(id) {
  const { data, error } = await supabase.from("rooms").delete().eq("id", id);

  if (error) {
    console.error("Error! rooms couldn't be found");
    throw new Error("Rooms couldn't be found");
  }
  return data;
}

export async function creatRoom(newRoom) {
  const { data, error } = await supabase
    .from("rooms")
    .insert([newRoom])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Rooms couldn't be found");
  }
  return data;
}
