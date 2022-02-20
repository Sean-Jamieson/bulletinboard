import { useEffect, useState } from "react";
import { getData } from "../api/asyncFunctions";
import { UserEvent } from "./useGetEvents";

type Result = { status: "loaded"; event: UserEvent } | { status: "loading" };

export function useGetEvent(id: string): Result {
  const [result, setResult] = useState<Result>({ status: "loading" });

  useEffect(() => {
    (async () => {
      const event = await getData(`events/${id}`);
      setResult({ status: "loaded", event });
    })();
  }, [id]);

  return result;
}
