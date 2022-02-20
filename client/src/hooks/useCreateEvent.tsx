import { useCallback, useState } from "react";
import { postData } from "../api/asyncFunctions";
import { CreateInput } from "./useCreateService";
import { UserEvent } from "./useGetEvents";

type Result = { status: "loaded"; event: UserEvent } | { status: "loading" };

export function useCreateEvent(): [(data: CreateInput) => void, Result] {
  const [result, setResult] = useState<Result>({ status: "loading" });

  const createEvent = useCallback(async (data: CreateInput) => {
    const event = await postData("events/create", data);
    setResult({ status: "loaded", event });
  }, []);

  return [createEvent, result];
}
