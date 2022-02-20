import { useCallback, useState } from "react";
import { deleteData } from "../api/asyncFunctions";
import { UserEvent } from "./useGetEvents";

type Result = { status: "loaded"; event: UserEvent } | { status: "loading" };

export function useDeleteEvent(): [(id: string) => Promise<void>, Result] {
  const [result, setResult] = useState<Result>({ status: "loading" });

  const deleteEvent = useCallback(async (id: string) => {
    const event = await deleteData(`events/delete/${id}`);
    setResult({ status: "loaded", event });
  }, []);

  return [deleteEvent, result];
}
