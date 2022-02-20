import { Box, Text, HStack, useMediaQuery, VStack } from "@chakra-ui/react";

import "pure-react-carousel/dist/react-carousel.es.css";
import { Component } from "../components/Component";
import { Gallery } from "../components/Gallery";
import { Info } from "../components/Info";
import { GoogleMap } from "../components/Map";
import User from "../components/User";

export function Event() {
  const [isMobile] = useMediaQuery("(max-width: 1300px)");

  const canDelete = true;

  const pictures = [
    "/images/bltnbrdlogo.png",
    "/images/carouseltest.jpg",
    "/images/wave.jpg",
    "/images/bltnbrdlogo.png",
    "/images/wave.jpg",
  ];

  if (isMobile) {
    return (
      <VStack w="100%" p={3}>
        <Component title="My Really Awesome BBQ" canDelete={canDelete}>
          <Gallery pictures={pictures} />
        </Component>
        <HStack w="100%">
          <Component title="Host">
            <User />
          </Component>
          <Box h="100%" w="100%">
            <Component title="Event Information">
              <Info
                date="Janaury 16th, 2020"
                time="9:00-10:00PM"
                location="Victoria"
              />
            </Component>
          </Box>
        </HStack>
        <Component title="Map">
          <Box w="100%" h="320px" bgColor="black">
            <GoogleMap lat={48.428} lng={-123.3656} />
          </Box>
        </Component>
        <Component title="Description">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna
            justo, imperdiet eu nisl eget, hendrerit pellentesque tortor. Morbi
            condimentum volutpat lectus feugiat consectetur. Praesent non dolor
            at leo viverra faucibus vitae et risus. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Maecenas fringilla odio vitae sapien venenatis, eget porttitor enim
            tempus. Phasellus risus lorem, tristique ut dictum vitae, lacinia et
            libero. Nunc interdum risus ut lorem imperdiet placerat. Sed sed
            bibendum eros, id pulvinar justo. Nulla vitae ultrices justo. Sed
            sit amet turpis et erat scelerisque varius. Mauris tristique id
            risus eget condimentum. In hac habitasse platea dictumst. Phasellus
            ectetur. Praesent non dolor at leo viverra faucibus vitae et risus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Maecenas fringilla odio vitae sapien
            venenatis, eget porttitor enim tempus. Phasellus risus lorem,
            tristique ut dictum vitae, lacinia et libero. Nunc interdum risus ut
            lorem imperdiet placerat. Sed sed bibendum eros, id pulvinar justo.
            Nulla vitae ultrices justo. Sed sit amet turpis et erat scelerisque
            varius. Mauris tristique id risus eget condimentum. In hac habitasse
            platea dictumst. Phasellus
          </Text>
        </Component>
      </VStack>
    );
  }

  return (
    <HStack w="100%" p={3} marginX={{ base: 0, "2xl": 20 }}>
      <VStack flexGrow={1} h="100%">
        <Component title="My Really Awesome BBQ" canDelete={canDelete}>
          <Gallery pictures={pictures} />
        </Component>
        <Component title="Description">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna
            justo, imperdiet eu nisl eget, hendrerit pellentesque tortor. Morbi
            condimentum volutpat lectus feugiat consectetur. Praesent non dolor
            at leo viverra faucibus vitae et risus. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Maecenas fringilla odio vitae sapien venenatis, eget porttitor enim
            tempus. Phasellus risus lorem, tristique ut dictum vitae, lacinia et
            libero. Nunc interdum risus ut lorem imperdiet placerat. Sed sed
            bibendum eros, id pulvinar justo. Nulla vitae ultrices justo. Sed
            sit amet turpis et erat scelerisque varius. Mauris tristique id
            risus eget condimentum. In hac habitasse platea dictumst. Phasellus
            ectetur. Praesent non dolor at leo viverra faucibus vitae et risus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Maecenas fringilla odio vitae sapien
            venenatis, eget porttitor enim tempus. Phasellus risus lorem,
            tristique ut dictum vitae, lacinia et libero. Nunc interdum risus ut
            lorem imperdiet placerat. Sed sed bibendum eros, id pulvinar justo.
            Nulla vitae ultrices justo. Sed sit amet turpis et erat scelerisque
            varius. Mauris tristique id risus eget condimentum. In hac habitasse
            platea dictumst. Phasellus
          </Text>
        </Component>
      </VStack>
      <VStack h="100%" minW="332px" maxW="332px">
        <Component title="Host">
          <User />
        </Component>
        <Component title="Event Information">
          <Info
            date="Janaury 16th, 2020"
            time="9:00-10:00PM"
            location="Victoria"
          />
        </Component>
        <Component title="Map">
          <Box w="100%" h="320px" bgColor="black">
            <GoogleMap lat={48.428} lng={-123.3656} />
          </Box>
        </Component>
      </VStack>
    </HStack>
  );
}
