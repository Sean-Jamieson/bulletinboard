import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = {
  title: string;
};

export function Component({ title, children }: PropsWithChildren<Props>) {
  return (
    <VStack spacing={0} h="fit-content" w="100%">
      <Center
        bgColor="cardHeader"
        w="100%"
        px={3}
        py={1}
        borderTopRadius="lg"
        color="white"
      >
        <Heading size="md">{title}</Heading>
      </Center>
      <Box bgColor="whitesmoke" p={3} w="100%" borderBottomRadius="md">
        {children}
      </Box>
    </VStack>
  );
}
