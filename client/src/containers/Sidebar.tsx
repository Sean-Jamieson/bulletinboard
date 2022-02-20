import { Flex, VStack } from "@chakra-ui/react";
import { Filters } from "../components/Filters";

export function Sidebar({ children }: { children: JSX.Element }) {
  return (
    <Flex
      minW="288px"
      maxW="288px"
      direction="column"
      h="100%"
      bgColor="whitesmoke"
    >
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
