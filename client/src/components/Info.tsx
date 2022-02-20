import {
  Center,
  Icon,
  Table,
  Tag,
  Tbody,
  Td,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { MdAccessTime, MdOutlineDateRange } from "react-icons/md";

type Props = {
  date: string;
  type: string;
};

export function Info({ date, type }: Props) {
  return (
    <VStack>
      <Table variant="simple" colorScheme="blackAlpha">
        <Tbody>
          <Tr>
            <Td p={0}>
              <Icon as={MdOutlineDateRange} fontSize="25px" />
            </Td>
            <Td py={0.3}>{new Date(date).toDateString()}</Td>
          </Tr>
          <Tr>
            <Td p={0} fontSize="25px">
              <Icon as={MdAccessTime} />
            </Td>
            <Td pt={0.3}>{new Date(date).toTimeString()}</Td>
          </Tr>
        </Tbody>
      </Table>
      <Center w="100%" h="100%" pt="2">
        <Tag mb="2" bgColor="tag" color="white">
          {type}
        </Tag>
      </Center>
    </VStack>
  );
}
