import { Flex, VStack } from "@chakra-ui/react";
import { Filters } from "../components/Filters";

export function Sidebar({ children }: { children: JSX.Element }) {
  return (
    <Flex minW="20%" maxW="20%" direction="column" h="100%" bgColor="black">
      <Filters />
      <VStack
        justifyContent="flex-start"
        height="100%"
        width="100%"
        overflowX="hidden"
        overflowY="auto"
        direction="column"
      >
        {children}
      </VStack>
    </Flex>
  );
}
