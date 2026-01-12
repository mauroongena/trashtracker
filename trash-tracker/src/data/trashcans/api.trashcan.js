import { supabase } from "../../lib/supabase";

export const updateTrashcanStatus = async (id, is_full) => {
  try {
    const now = new Date().toISOString().split("T")[0];

    const { data, error } = await supabase
      .from("trashcans")
      .update({
        is_full: is_full,
        last_updated: now,
      })
      .eq("id", id)
      .select();

    if (error) {
      console.error("Error updating trashcan:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error updating trashcan status:", error);
    return null;
  }
};
