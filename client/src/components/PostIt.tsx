import {
  Box,
  Center,
  Collapse,
  HStack,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  MdOutlineDateRange,
  MdAccessTime,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type Props = {
  title: string;
  date: string;
  time: string;
  location: string;
  tags?: string[];
};

export function PostIt({ title, date, time, location, tags }: Props) {
  const [show, setShow] = useState(true);

  const handleToggle = () => setShow(!show);

  return (
    <Box bgColor="postitbg" w="90%" h="fit-content" p={2}>
      <HStack w="100%" justifyContent="space-between">
        <Text fontSize="20px" as="strong">
          {title}
        </Text>
        <IconButton
          icon={show ? <FaChevronUp /> : <FaChevronDown />}
          aria-label={show ? "show less" : "show more"}
          onClick={handleToggle}
          size="sm"
          colorScheme="postitbg"
          color="black"
        />
      </HStack>
      <Collapse in={show}>
        <Center>
          <Table variant="simple" colorScheme="blackAlpha">
            <Tbody>
              <Tr>
                <Td p={0}>
                  <Icon as={MdOutlineDateRange} fontSize="25px" />
                </Td>
                <Td py={0.3}>{date}</Td>
              </Tr>
              <Tr>
                <Td p={0} fontSize="25px">
                  <Icon as={MdAccessTime} />
                </Td>
                <Td py={0.3}>{time}</Td>
              </Tr>
              <Tr>
                <Td p={0} fontSize="25px">
                  <Icon as={MdOutlineLocationOn} />
                </Td>
                <Td py={0.3}>{location}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Center>
      </Collapse>
    </Box>
  );
}
