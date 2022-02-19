import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type Props = {
  pictures: string[];
};

export function Gallery({ pictures }: Props) {
  const [selected, setSelected] = useState(0);

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
    <VStack w="100%">
      <Center bgColor="black">
        <Image
          maxW="1000px"
          minW="1000px"
          maxH="400px"
          minH="400px"
          objectFit="scale-down"
          src={pictures[selected]}
        />
      </Center>
      <HStack h="80px">
        <IconButton
          size="lg"
          aria-label="left"
          icon={<BiChevronLeft fontSize="25px" />}
          onClick={handleLeft}
        />
        {pictures.map((picture, i) => (
          <Center h="fit-content" border={selected === i ? "solid" : "none"}>
            <Image
              objectFit="scale-down"
              maxW="100px"
              _hover={{
                border: selected !== i ? "solid" : "none",
              }}
              src={picture}
              onClick={() => setSelected(i)}
            />
          </Center>
        ))}
        <IconButton
          size="lg"
          aria-label="right"
          icon={<BiChevronRight fontSize="25px" />}
          onClick={handleRight}
        />
      </HStack>
    </VStack>
  );
}
