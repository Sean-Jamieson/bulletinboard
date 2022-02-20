import {
  Avatar,
  Button,
  ButtonGroup,
  Center,
  HStack,
  Image,
  Select,
} from "@chakra-ui/react";
import { useMatch, useNavigate, useParams } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const { region, slug } = useParams();

  const eventsMatch = useMatch("/events/*");
  const servicesMatch = useMatch("/services/*");
  const newPostingMatch = useMatch("/new/*");

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
          minH="45px"
          minW="12em"
          color="transparent"
          loading="lazy"
          ml="14"
        />
        <HStack pr={3} spacing={4}>
          <Select bgColor="whiteAlpha.700" placeholder="Victoria" />
          <ButtonGroup isAttached colorScheme="whiteAlpha">
            <Button
              color="black"
              isActive={eventsMatch ? true : false}
              onClick={() => navigate(`/events/${region}/${slug}`)}
            >
              Events
            </Button>
            <Button
              color="black"
              isActive={servicesMatch ? true : false}
              onClick={() => navigate(`/services/${region}/${slug}`)}
            >
              Services
            </Button>
            <Button
              color="black"
              isActive={newPostingMatch ? true : false}
              onClick={() => navigate(`/new/${region}`)}
            >
              New posting
            </Button>
          </ButtonGroup>
          <Avatar size="md" />
        </HStack>
      </HStack>
    </Center>
  );
}
