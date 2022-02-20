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
import { useGetService } from "../hooks/useGetService";

const getCookie = (name: string): string | undefined => {
  var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
};

export function Service({ id }: { id: string }) {
  const [isMobile] = useMediaQuery("(max-width: 1300px)");

  const service = useGetService(id);
  const canDelete = useMemo(
    () =>
      service.status === "loaded" &&
      service.service.organizer &&
      service.service.organizer === getCookie("email")
        ? true
        : false,
    [service]
  );

  if (isMobile) {
    return (
      <>
        {service.status === "loading" ? (
          <Center w="100%">
            <Spinner />
          </Center>
        ) : (
          <VStack w="100%" p={3}>
            <Component
              title={service.service.title}
              canDelete={canDelete}
              id={id}
            >
              <Gallery pictures={service.service.pictures ?? []} />
            </Component>
            <HStack w="100%">
              <Component title="Host">
                <User
                  email={
                    service.service.organizer
                      ? service.service.organizer
                      : "hello@hello.com"
                  }
                />
              </Component>
              <Box h="100%" w="100%">
                <Component title="Service Information">
                  <Info date={service.service.date} type="swag" />
                </Component>
              </Box>
            </HStack>
            <Component title="Map">
              <Box w="100%" h="320px" bgColor="black">
                <GoogleMap
                  lat={service.service.lat}
                  lng={service.service.lng}
                />
              </Box>
            </Component>
            <Component title="Description">
              <Text>{service.service.description}</Text>
            </Component>
          </VStack>
        )}
      </>
    );
  }

  return (
    <HStack w="100%" p={3} marginX={{ base: 0, "2xl": 20 }}>
      {service.status === "loading" ? (
        <Center w="100%">
          <Spinner />
        </Center>
      ) : (
        <>
          <VStack flexGrow={1} h="100%">
            <Component
              title={service.service.title}
              canDelete={canDelete}
              id={id}
            >
              <Gallery pictures={service.service.pictures ?? []} />
            </Component>
            <Component title="Description">
              <Text>{service.service.description}</Text>
            </Component>
          </VStack>
          <VStack h="100%" minW="332px" maxW="332px">
            <Component title="Host">
              <User
                email={
                  service.service.organizer
                    ? service.service.organizer
                    : "hello@hello.com"
                }
              />
            </Component>
            <Component title="Service Information">
              <Info
                date={service.service.date}
                type={service.service.type ?? "swag"}
              />
            </Component>
            {service.service.lng && service.service.lat && (
              <Component title="Map">
                <Box w="100%" h="320px" bgColor="black">
                  <GoogleMap
                    lat={service.service.lat}
                    lng={service.service.lng}
                  />
                </Box>
              </Component>
            )}
          </VStack>
        </>
      )}
    </HStack>
  );
}
