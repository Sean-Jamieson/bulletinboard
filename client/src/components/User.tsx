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
import { useGetUser } from "../hooks/useGetUser";

export default function User({ email }: { email: string }) {
  const [isMobile] = useMediaQuery("(max-width: 1300px)");
  const user = useGetUser(email);
  return (
    <VStack spacing={3}>
      {user.status === "loading" ? (
        <p>loading</p>
      ) : (
        user.user && (
          <>
            <HStack spacing={4}>
              <Avatar src={user.user.picture} size="lg" />
              {!isMobile && (
                <Text overflowWrap="anywhere">{user.user.username}</Text>
              )}
            </HStack>
            {isMobile && (
              <Center w="100%" textAlign="center">
                <Text overflowWrap="anywhere">{user.user.username}</Text>
              </Center>
            )}
            <Button
              bgColor="tag"
              color="white"
              colorScheme="blackAlpha"
              rightIcon={<EmailIcon />}
              onClick={() => (window.location.href = `mailto:${email}`)}
            >
              Contact me
            </Button>
          </>
        )
      )}
    </VStack>
  );
}
