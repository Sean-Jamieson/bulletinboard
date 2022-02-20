import { Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { PostIt } from "../components/PostIt";

export function Page({ children }: { children: JSX.Element }) {
  return (
    <Flex h="100vh" direction="column" overflow="hidden">
      <Header />
      <Flex overflowY="auto" h="100%">
        <Sidebar>
          <>
            {Array.from({ length: 100 }, () => (
              <PostIt
                // key={"s"}
                title="what's up"
                date="January 16th, 2020"
                time="12:00AM-12:00PM"
                location="Cool Place Road"
              />
            ))}
          </>
        </Sidebar>
        <Flex w="100%" overflowY="auto" h="100%">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
