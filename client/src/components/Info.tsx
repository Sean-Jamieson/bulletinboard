import { Icon, Table, Tbody, Td, Tr, VStack } from "@chakra-ui/react";
import {
  MdAccessTime,
  MdOutlineDateRange,
  MdOutlineLocationOn,
} from "react-icons/md";

type Props = {
  date: string | JSX.Element;
  time: string | JSX.Element;
  location: string | JSX.Element;
};

export function Info({ date, time, location }: Props) {
  return (
    <VStack>
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
    </VStack>
  );
}
