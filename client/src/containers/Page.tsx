import { Box, Flex } from "@chakra-ui/react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { PostIt } from "../components/PostIt";
import { CenterPost } from "./CenterPost";

export function Page() {
  return (
    <Flex h="100vh" direction="column" overflow="hidden">
      <Header />
      <Flex overflowY="auto" h="100%">
        <Sidebar>
          <>
            {Array.from({ length: 100 }, () => (
              <PostIt
                title="what's up"
                date="January 16th, 2020"
                time="12:00AM-12:00PM"
                location="Cool Place Road"
              />
            ))}
          </>
        </Sidebar>
        <CenterPost />
      </Flex>
    </Flex>
  );
}
