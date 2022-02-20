import {
  Avatar,
  Button,
  ButtonGroup,
  Center,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const { slug } = useParams();

  const eventsMatch = useMatch("/events/*");
  const servicesMatch = useMatch("/services/*");
  const newPostingMatch = useMatch("/new/*");

  return (
    <Center
      w="100%"
      bgColor="headerbg"
      as="header"
      boxShadow="xl"
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
          <ButtonGroup isAttached colorScheme="whiteAlpha">
            <Button
              color="black"
              isActive={eventsMatch ? true : false}
              onClick={() => navigate(`/events/${slug ?? ""}`)}
            >
              Events
            </Button>
            <Button
              color="black"
              isActive={servicesMatch ? true : false}
              onClick={() => navigate(`/services/${slug ?? ""}`)}
            >
              Services
            </Button>
            <Button
              color="black"
              isActive={newPostingMatch ? true : false}
              onClick={() => navigate(`/new/`)}
            >
              New posting
            </Button>
          </ButtonGroup>
          {isAuthenticated ? (
            <Menu>
              <MenuButton>
                <Avatar src={user?.picture} size="md" />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    logout({ returnTo: window.location.origin });
                    document.cookie =
                      "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                  }}
                >
                  Log out
                </MenuItem>
                <MenuItem>My Events</MenuItem>
                <MenuItem>My Services</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Menu>
              <MenuButton as={Avatar} size="md" />
              <MenuList>
                <MenuItem onClick={() => loginWithRedirect()}>Login</MenuItem>
              </MenuList>
            </Menu>
          )}
        </HStack>
      </HStack>
    </Center>
  );
}
