import { Box, Button, Center, Heading, HStack, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteEvent } from "../hooks/useDeleteEvent";

type Props = {
  title: string;
  canDelete?: boolean;
  id?: string;
};

export function Component({
  title,
  children,
  canDelete,
  id,
}: PropsWithChildren<Props>) {
  const [deleteEvent] = useDeleteEvent();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!id) return;
    deleteEvent(id);
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
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
            <Button
              size="sm"
              bgColor="resetDelBg"
              _hover={{ colorBg: "resetHover" }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          )}
        </HStack>
      </Center>
      <Box bgColor="cardbg" p={3} w="100%" borderBottomRadius="md">
        {children}
      </Box>
    </VStack>
  );
}
