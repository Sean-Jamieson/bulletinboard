import {
  Box,
  Text,
  HStack,
  useMediaQuery,
  VStack,
  Spinner,
  Center,
} from "@chakra-ui/react";

import "pure-react-carousel/dist/react-carousel.es.css";
import { useMemo } from "react";
import { Component } from "../components/Component";
import { Gallery } from "../components/Gallery";
import { Info } from "../components/Info";
import { GoogleMap } from "../components/Map";
import User from "../components/User";
import { useGetEvent } from "../hooks/useGetEvent";

const getCookie = (name: string): string | undefined => {
  var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
};

export function Event({ id }: { id: string }) {
  const [isMobile] = useMediaQuery("(max-width: 1300px)");

  const event = useGetEvent(id);
  const canDelete = useMemo(
    () =>
      event.status === "loaded" &&
      event.event.organizer &&
      event.event.organizer === getCookie("email")
        ? true
        : false,
    [event]
  );

  if (isMobile) {
    return (
      <>
        {event.status === "loading" ? (
          <Center w="100%">
            <Spinner />
          </Center>
        ) : (
          <VStack w="100%" p={3}>
            <Component title={event.event.title} canDelete={canDelete}>
              <Gallery pictures={event.event.pictures} />
            </Component>
            <HStack w="100%">
              <Component title="Host">
                <User email={event.event.organizer} />
              </Component>
              <Box h="100%" w="100%">
                <Component title="Event Information">
                  <Info date={event.event.date} />
                </Component>
              </Box>
            </HStack>
            <Component title="Map">
              <Box w="100%" h="320px" bgColor="black">
                <GoogleMap lat={event.event.lat} lng={event.event.lng} />
              </Box>
            </Component>
            <Component title="Description">
              <Text>{event.event.description}</Text>
            </Component>
          </VStack>
        )}
      </>
    );
  }

  return (
    <HStack w="100%" p={3} marginX={{ base: 0, "2xl": 20 }}>
      {event.status === "loading" ? (
        <Center w="100%">
          <Spinner />
        </Center>
      ) : (
        <>
          <VStack flexGrow={1} h="100%">
            <Component title={event.event.title} canDelete={canDelete}>
              <Gallery pictures={event.event.pictures} />
            </Component>
            <Component title="Description">
              <Text>{event.event.description}</Text>
            </Component>
          </VStack>
          <VStack h="100%" minW="332px" maxW="332px">
            <Component title="Host">
              <User email={event.event.organizer} />
            </Component>
            <Component title="Event Information">
              <Info date={event.event.date} type={event.event.type} />
            </Component>
            {event.event.lng && event.event.lat && (
              <Component title="Map">
                <Box w="100%" h="320px" bgColor="black">
                  <GoogleMap lat={event.event.lat} lng={event.event.lng} />
                </Box>
              </Component>
            )}
          </VStack>
        </>
      )}
    </HStack>
  );
}
