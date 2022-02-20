import { useCallback, useState } from "react";
import { deleteData } from "../api/asyncFunctions";

// Event data type
export type UserService = {
  organizer: string;
  description: string;
  title: string;
  type: string;
  lat: number;
  lng: number;
  date: string;
  rating: number;
  pictures: string[];
};

type Result =
  | { status: "loaded"; service: UserService }
  | { status: "loading" };

export function useDeleteEvent(): [(id: string) => Promise<void>, Result] {
  const [result, setResult] = useState<Result>({ status: "loading" });

  const deleteEvent = useCallback(async (id: string) => {
    const service = await deleteData(`services/delete/${id}`);
    setResult({ status: "loaded", service });
  }, []);

  return [deleteEvent, result];
}
