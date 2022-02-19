import React from "react";

import { Box, Image } from "@chakra-ui/react";
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export function CenterPost() {
  return (
    <Box w="80%" maxH="100%" m="30px">
      <CarouselProvider
        visibleSlides={3}
        totalSlides={6}
        step={3}
        naturalSlideWidth={1000}
        naturalSlideHeight={1000}
        hasMasterSpinner
      >
        <Slider>
          <Slide index={0}>
            <Image src="/images/carouseltest.jpg" />
          </Slide>
          <Slide index={1}>
            <Image src="/images/carouseltest.jpg" />
          </Slide>
          <Slide index={2}>
            <Image src="/images/carouseltest.jpg" />
          </Slide>
          <Slide index={3}>
            <Image src="/images/carouseltest.jpg" />
          </Slide>
          <Slide index={4}>
            <Image src="/images/carouseltest.jpg" />
          </Slide>
          <Slide index={5}>
            <Image src="/images/carouseltest.jpg" />
          </Slide>
        </Slider>
        <ButtonFirst>First</ButtonFirst>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <ButtonLast>Last</ButtonLast>
        <DotGroup />
      </CarouselProvider>
      {/* <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider> */}
    </Box>
  );
}
