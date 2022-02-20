import { useEffect, useState } from "react";
import { getData } from "../api/asyncFunctions";

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
