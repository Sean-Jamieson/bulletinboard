import {
  Avatar,
  Button,
  ButtonGroup,
  Center,
  HStack,
  Image,
  Select,
} from "@chakra-ui/react";

export function Header() {
  console.log(process.env);
  return (
    <Center
      w="100%"
      bgColor="background"
      as="header"
      boxShadow="md"
      position="sticky"
      minH="65px"
    >
      <HStack justifyContent="space-between" w="100%">
        <Image
          src={"/images/bltnbrdlogo.png"}
          alt="Bulletin Board"
          maxH="45px"
          minW="7em"
          color="transparent"
          loading="lazy"
          mx="2"
        />
        <HStack pr={3} spacing={4}>
          <Select bgColor="whiteAlpha.700" placeholder="Victoria" />
          <ButtonGroup isAttached colorScheme="whiteAlpha">
            <Button color="black" isActive>
              Events
            </Button>
            <Button color="black">Services</Button>
            <Button color="black">New posting</Button>
          </ButtonGroup>
          <Avatar size="md" />
        </HStack>
      </HStack>
    </Center>
  );
}
