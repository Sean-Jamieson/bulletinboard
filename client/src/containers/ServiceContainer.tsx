import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Page } from "./Page";
import { Service } from "./Service";

export default function ServiceContainer() {
  const { slug } = useParams();
  return (
    <Page>
      {slug ? (
        <Service id={slug} />
      ) : (
        <Center w="100%" h="100%">
          <VStack>
            <Heading>Welcome to bltnbrd! 🐦</Heading>
            <Text>
              Select some services from the sidebar to the left to get started.
            </Text>
          </VStack>
        </Center>
      )}
    </Page>
  );
}
