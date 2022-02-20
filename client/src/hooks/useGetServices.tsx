import { useEffect, useState } from "react";
import { getData } from "../api/asyncFunctions";
import { UserEvent } from "./useGetEvents";

type Result =
  | { status: "loaded"; services: UserEvent[] }
  | { status: "loading" };

export function useGetServices(): Result {
  const [result, setResult] = useState<Result>({ status: "loading" });

  useEffect(() => {
    (async () => {
      const services = await getData("services");
      setResult({ status: "loaded", services });
    })();
  }, []);

  return result;
}
