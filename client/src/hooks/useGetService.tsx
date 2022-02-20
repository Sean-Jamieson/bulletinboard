import { useEffect, useState } from "react";
import { getData } from "../api/asyncFunctions";

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

export function useGetEvent(id: string): Result {
  const [result, setResult] = useState<Result>({ status: "loading" });

  useEffect(() => {
    (async () => {
      const service = await getData(`services/${id}`);
      setResult({ status: "loaded", service });
    })();
  }, [id]);

  return result;
}
