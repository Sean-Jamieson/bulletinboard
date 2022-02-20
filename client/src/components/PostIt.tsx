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
import { MdOutlineDateRange, MdAccessTime } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  id: string;
  date: Date;
  tags?: string[];
};

export function PostIt({ title, date, tags, id }: Props) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => setShow(!show);
  const handleClick = () => {
    navigate(`/events/${id}`);
    // window.location.reload();
  };
  return (
    <Box bgColor="sidebarnotebg" w="90%" h="fit-content">
      <HStack w="100%" justifyContent="space-between" p={3}>
        <Text fontSize="20px" as="strong">
          {title}
        </Text>
        <IconButton
          icon={show ? <FaChevronUp /> : <FaChevronDown />}
          aria-label={show ? "show less" : "show more"}
          onClick={handleToggle}
          size="sm"
          colorScheme="sidebarnotebg"
          color="black"
        />
      </HStack>
      <Collapse in={show} onClick={handleClick}>
        <Center
          _hover={{ bgColor: "headerbg", cursor: "pointer" }}
          w="100%"
          h="100%"
          p={2}
        >
          <Table variant="simple" colorScheme="blackAlpha">
            <Tbody>
              <Tr>
                <Td p={0}>
                  <Icon as={MdOutlineDateRange} fontSize="25px" />
                </Td>
                <Td py={0.3}>{date.toDateString()}</Td>
              </Tr>
              <Tr>
                <Td p={0} fontSize="25px">
                  <Icon as={MdAccessTime} />
                </Td>
                <Td py={0.3}>{date.toTimeString()}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Center>
      </Collapse>
    </Box>
  );
}
