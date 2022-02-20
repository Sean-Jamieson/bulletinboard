import { Flex, Spinner } from "@chakra-ui/react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { PostIt } from "../components/PostIt";
import { useGetEvents } from "../hooks/useGetEvents";

export function Page({ children }: { children: JSX.Element }) {
  const events = useGetEvents();
  console.log(events.status === "loaded" ? events.events[0].title : "");

  return (
    <Flex h="100vh" direction="column" overflow="hidden">
      <Header />
      <Flex overflowY="auto" h="100%">
        <Sidebar>
          <>
            {events.status === "loaded" ? (
              events.events.map(({ title, date, _id }) => (
                <PostIt
                  key={_id}
                  id={_id}
                  title={title}
                  date={new Date(date)}
                />
              ))
            ) : (
              <Spinner />
            )}
          </>
        </Sidebar>
        <Flex w="100%" overflowY="auto" h="100%">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
