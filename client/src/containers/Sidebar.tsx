import { Flex, VStack } from "@chakra-ui/react";
import { Filters } from "../components/Filters";

export function Sidebar({
  children,
  handleSelected,
}: {
  children: JSX.Element;
  handleSelected: (type: string) => void;
}) {
  return (
    <Flex
      minW="288px"
      maxW="288px"
      direction="column"
      h="100%"
      bgColor="sidebarbg"
    >
      <Filters handleSelected={handleSelected} />
      <VStack
        justifyContent="flex-start"
        height="100%"
        width="100%"
        overflowX="hidden"
        overflowY="auto"
        direction="column"
        py={2}
      >
        {children}
      </VStack>
    </Flex>
  );
}
