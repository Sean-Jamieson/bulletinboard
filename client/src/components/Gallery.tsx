import {
  Center,
  HStack,
  IconButton,
  Image,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type Props = {
  pictures: string[];
};

export function Gallery({ pictures }: Props) {
  const [selected, setSelected] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 1300px)");

  pictures = pictures.filter((picture) => picture.length !== 0);

  const handleLeft = useCallback(() => {
    if (selected - 1 === -1) {
      setSelected(pictures.length - 1);
    } else {
      setSelected(selected - 1);
    }
  }, [pictures.length, selected]);

  const handleRight = useCallback(() => {
    setSelected((selected + 1) % pictures.length);
  }, [pictures.length, selected]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSelected((selected + 1) % pictures.length);
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [pictures, pictures.length, selected]);

  return (
    <VStack>
      <Center w="100%" h="100%">
        <Image
          maxW={{ base: "400px", xl: "600px", "2xl": "800px" }}
          minW={{ base: "400px", xl: "600px", "2xl": "800px" }}
          maxH={{ base: "200px", xl: "300px", "2xl": "400px" }}
          minH={{ base: "200px", xl: "300px", "2xl": "400px" }}
          objectFit="scale-down"
          src={pictures[selected]}
        />
      </Center>
      {
        <HStack
          h="fit-content"
          w={isMobile ? "100%" : ""}
          justifyContent={isMobile ? "center" : "normal"}
        >
          <IconButton
            w={isMobile ? "50px" : ""}
            size="lg"
            aria-label="left"
            icon={<BiChevronLeft fontSize="25px" />}
            onClick={handleLeft}
          />
          {!isMobile &&
            pictures.map((picture, i) => (
              <Center key={i} h="fit-content">
                <Image
                  objectFit="scale-down"
                  maxW="100px"
                  src={picture}
                  onClick={() => setSelected(i)}
                />
              </Center>
            ))}
          <IconButton
            w={isMobile ? "50px" : ""}
            size="lg"
            aria-label="right"
            icon={<BiChevronRight fontSize="25px" />}
            onClick={handleRight}
          />
        </HStack>
      }
    </VStack>
  );
}
