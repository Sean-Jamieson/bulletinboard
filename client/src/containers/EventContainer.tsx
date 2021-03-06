import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Event } from "./Event";
import { Page } from "./Page";

export default function EventContainer() {
  const { slug } = useParams();
  return (
    <Page>
      {slug ? (
        <Event id={slug} />
      ) : (
        <Center w="100%" h="100%">
          <VStack>
            <Heading>Welcome to bltnbrd! 🐦</Heading>
            <Text>
              Select some events from the sidebar to the left to get started.
            </Text>
          </VStack>
        </Center>
      )}
    </Page>
  );
}
