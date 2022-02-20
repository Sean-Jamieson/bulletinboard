import { useCallback, useState } from "react";
import { postData } from "../api/asyncFunctions";
import { UserEvent } from "./useGetEvents";

type Result = { status: "loaded"; service: UserEvent } | { status: "loading" };

export type CreateInput = {
  title: string;
  type: string;
  date: Date;
  lng: number;
  lat: number;
  organizer: string;
  description: string;
  pictures: string[];
};

export function useCreateService(): [(data: CreateInput) => void, Result] {
  const [result, setResult] = useState<Result>({ status: "loading" });

  const createService = useCallback(async (data: CreateInput) => {
    const service = await postData("services/create", data);
    setResult({ status: "loaded", service });
  }, []);

  return [createService, result];
}
