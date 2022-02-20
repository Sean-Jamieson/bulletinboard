import { Box, Button, Center, Heading, HStack, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = {
  title: string;
  canDelete?: boolean;
};

export function Component({
  title,
  children,
  canDelete,
}: PropsWithChildren<Props>) {
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
        <HStack justifyContent="space-between" w={canDelete ? "100%" : ""}>
          <Heading size="md">{title}</Heading>
          {canDelete && (
            <Button size="sm" colorScheme="red">
              Delete
            </Button>
          )}
        </HStack>
      </Center>
      <Box bgColor="whitesmoke" p={3} w="100%" borderBottomRadius="md">
        {children}
      </Box>
    </VStack>
  );
}
