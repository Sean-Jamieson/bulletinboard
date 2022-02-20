import { Flex, Spinner } from "@chakra-ui/react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { PostIt } from "../components/PostIt";
import { useGetEvents } from "../hooks/useGetEvents";
import { useMatch } from "react-router-dom";
import { useGetServices } from "../hooks/useGetServices";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

export function Page({ children }: { children: JSX.Element }) {
  const events = useGetEvents();
  const services = useGetServices();

  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    document.cookie = `email=${user?.email}`;
  }

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleSelected = (type: string) => {
    setSelectedTypes([...selectedTypes, type]);
  };

  const newPostingMatch = useMatch("/new/*");
  const serviceMatch = useMatch("/services/*");

  if (serviceMatch)
    return (
      <Flex h="100vh" direction="column" overflow="hidden">
        <Header />
        <Flex overflowY="auto" h="100%">
          {!newPostingMatch && (
            <Sidebar handleSelected={handleSelected}>
              <>
                {services.status === "loaded" ? (
                  services.services.map(({ title, date, _id }) => (
                    <PostIt
                      key={_id}
                      id={_id ?? ""}
                      title={title}
                      date={new Date(date)}
                    />
                  ))
                ) : (
                  <Spinner />
                )}
              </>
            </Sidebar>
          )}
          <Flex w="100%" overflowY="auto" h="100%">
            {children}
          </Flex>
        </Flex>
      </Flex>
    );

  return (
    <Flex h="100vh" direction="column" overflow="hidden">
      <Header />
      <Flex overflowY="auto" h="100%">
        {!newPostingMatch && (
          <Sidebar handleSelected={handleSelected}>
            <>
              {events.status === "loaded" ? (
                events.events.map(({ title, date, _id }) => (
                  <PostIt
                    key={_id}
                    id={_id ?? ""}
                    title={title}
                    date={new Date(date)}
                  />
                ))
              ) : (
                <Spinner />
              )}
            </>
          </Sidebar>
        )}
        <Flex w="100%" overflowY="auto" h="100%">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
