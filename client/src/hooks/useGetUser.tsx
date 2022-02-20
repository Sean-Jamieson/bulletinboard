import { useEffect, useState } from "react";
import { getUser } from "../api/getUser";

// Event data type
export type User = {
  email: string;
  id: string;
  username: string;
  picture: string;
};

type Result = { status: "loaded"; user: User } | { status: "loading" };

export function useGetUser(email: string): Result {
  const [result, setResult] = useState<Result>({ status: "loading" });

  useEffect(() => {
    (async () => {
      const user = await getUser(email);
      setResult({ status: "loaded", user });
    })();
  }, [email]);

  return result;
}
