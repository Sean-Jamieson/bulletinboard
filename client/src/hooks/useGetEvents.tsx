import { useEffect, useState } from "react";
import { getData } from "../api/asyncFunctions";

// Event data type
export type UserEvent = {
  _id?: string;
  organizer: string;
  description: string;
  title: string;
  type?: string;
  lat: number;
  lng: number;
  date: string;
  rating?: number;
  pictures: string[];
};

type Result = { status: "loaded"; events: UserEvent[] } | { status: "loading" };

export function useGetEvents(): Result {
  const [result, setResult] = useState<Result>({ status: "loading" });

  useEffect(() => {
    (async () => {
      const events = await getData("events");
      setResult({ status: "loaded", events });
    })();
  }, []);

  return result;
}
