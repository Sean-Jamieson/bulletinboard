import { useCallback, useState } from "react";
import { postData } from "../api/asyncFunctions";

// Event data type
export type UserEvent = {
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

type Result = { status: "loaded"; event: UserEvent } | { status: "loading" };

export function useCreateEvent(
  id: string
): [(data: UserEvent) => void, Result] {
  const [result, setResult] = useState<Result>({ status: "loading" });

  const createEvent = useCallback(async (data: UserEvent) => {
    const event = await postData("events/create", data);
    setResult({ status: "loaded", event });
  }, []);

  return [createEvent, result];
}
