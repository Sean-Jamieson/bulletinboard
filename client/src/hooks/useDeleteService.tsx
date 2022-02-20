import { useCallback, useState } from "react";
import { deleteData } from "../api/asyncFunctions";
import { UserEvent } from "./useGetEvents";

type Result = { status: "loaded"; service: UserEvent } | { status: "loading" };

export function useDeleteEvent(): [(id: string) => Promise<void>, Result] {
  const [result, setResult] = useState<Result>({ status: "loading" });

  const deleteEvent = useCallback(async (id: string) => {
    const service = await deleteData(`services/delete/${id}`);
    setResult({ status: "loaded", service });
  }, []);

  return [deleteEvent, result];
}
