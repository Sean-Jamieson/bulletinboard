import React from "react";

import { Box } from "@chakra-ui/react";

import "pure-react-carousel/dist/react-carousel.es.css";
import { Gallery } from "../components/Gallery";

export function CenterPost() {
  const pictures = [
    "/images/bltnbrdlogo.png",
    "/images/carouseltest.jpg",
    "/images/bltnbrdlogo.png",
    "/images/wave.jpg",
  ];
  return (
    <Box w="80%" maxH="100%" m="30px">
      <Gallery pictures={pictures} />
    </Box>
  );
}
