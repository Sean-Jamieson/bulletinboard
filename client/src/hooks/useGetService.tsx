import { useEffect, useState } from "react";
import { getData } from "../api/asyncFunctions";
import { UserEvent } from "./useGetEvents";

type Result = { status: "loaded"; service: UserEvent } | { status: "loading" };

export function useGetService(id: string): Result {
  const [result, setResult] = useState<Result>({ status: "loading" });

  useEffect(() => {
    (async () => {
      const service = await getData(`services/${id}`);
      setResult({ status: "loaded", service });
    })();
  }, [id]);

  return result;
}
