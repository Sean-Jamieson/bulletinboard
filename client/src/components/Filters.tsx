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
} from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export function Filters() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Box w="100%" bgColor="background" top="0" m="0" boxShadow="md" zIndex={10}>
      <HStack w="100%" justifyContent="space-between" p={3}>
        <Text color="white" fontSize="19px">
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
        <Flex py={2} wrap="wrap" justifyContent="space-evenly">
          {Array.from({ length: 13 }, () => (
            <Tag mb="2" bgColor="tag" color="white">
              <TagLabel>Hello</TagLabel>
              <TagRightIcon />
            </Tag>
          ))}
        </Flex>
      </Collapse>
    </Box>
  );
}
