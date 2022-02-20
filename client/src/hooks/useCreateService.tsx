import { useCallback, useState } from "react";
import { postData } from "../api/asyncFunctions";

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

export function useCreateService(
  id: string
): [(data: UserService) => void, Result] {
  const [result, setResult] = useState<Result>({ status: "loading" });

  const createService = useCallback(async (data: UserService) => {
    const service = await postData("services/create", data);
    setResult({ status: "loaded", service });
  }, []);

  return [createService, result];
}
