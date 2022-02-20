import {
  Box,
  Collapse,
  Flex,
  HStack,
  IconButton,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export function Filters({
  handleSelected,
}: {
  handleSelected: (type: string) => void;
}) {
  const [show, setShow] = useState(false);
  const types: string[] = [
    "Fitness",
    "Night Life",
    "Cultural Food",
    "Nature Experiences",
    "Workshops and Self Improvement",
    "Gardening and Plants",
    "Group Talk and Conversations",
    "Children",
    "Family",
    "Sports and Games",
  ];
  const handleToggle = () => setShow(!show);

  return (
    <Box w="100%" bgColor="filtersbg" top="0" m="0" boxShadow="md" zIndex={10}>
      <HStack w="100%" justifyContent="space-between" p={3}>
        <Text color="black" fontSize="19px">
          Filters
        </Text>
        <IconButton
          icon={show ? <FaChevronUp /> : <FaChevronDown />}
          aria-label={show ? "show less" : "show more"}
          onClick={handleToggle}
          size="sm"
          colorScheme="background"
        />
      </HStack>
      <Collapse in={show}>
        <Center>
          <Button
            ml="15px"
            bgColor="resetDelBg"
            _hover={{ bgColor: "resetHover" }}
            size="sm"
          >
            Reset filters
          </Button>
        </Center>
        <Flex py={2} wrap="wrap" m="2px" justifyContent="space-evenly">
          {types.map((type) => (
            <Tag mb="2" bgColor="tag" color="white">
              <TagLabel>{type}</TagLabel>
              <TagRightIcon />
            </Tag>
          ))}
        </Flex>
      </Collapse>
    </Box>
  );
}
