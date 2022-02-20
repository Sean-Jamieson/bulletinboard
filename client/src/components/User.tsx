import { EmailIcon } from "@chakra-ui/icons";
import {
  Avatar,
  VStack,
  Text,
  HStack,
  Button,
  useMediaQuery,
  Center,
} from "@chakra-ui/react";

export default function User() {
  const [isMobile] = useMediaQuery("(max-width: 1300px)");
  return (
    <VStack spacing={3}>
      <HStack spacing={4}>
        <Avatar src="/images/carouseltest.jpg" size="lg" />
        {!isMobile && (
          <Text overflowWrap="anywhere">
            Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.
          </Text>
        )}
      </HStack>
      {isMobile && (
        <Center w="100%" textAlign="center">
          <Text overflowWrap="anywhere">
            Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.
          </Text>
        </Center>
      )}
      <Button colorScheme="cyan" rightIcon={<EmailIcon />}>
        Email User
      </Button>
    </VStack>
  );
}
