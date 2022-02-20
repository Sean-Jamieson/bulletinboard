import {
  VStack,
  HStack,
  Input,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  Textarea,
  Center,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from "@chakra-ui/react";
import { DatePicker } from "@orange_digital/chakra-datepicker";

import { FileUpload } from "../components/FileUpload";

export function CreatePost() {
  return (
    <VStack w="100%">
      <Center w="100%">
        <HStack>
          <VStack h="fit-content" px="10">
            <Box
              as="fieldset"
              border="2pt solid black"
              borderRadius="lg"
              p="20px"
              bgColor="whitesmoke"
              shadow="3px 3px rgba(0, 0, 0, 0.78)"
              minW="400px"
            >
              <FormLabel as="legend" fontSize="4xl" p="10px" pb="16px">
                Create your post
              </FormLabel>
              <FormLabel as="legend" mt="-20px" ml="10px">
                I'm providing a...
              </FormLabel>
              <RadioGroup defaultValue="Service" ml="10px">
                <HStack spacing="36px">
                  <Radio
                    _hover={{ bgColor: "inputHighlight" }}
                    bgColor="grey"
                    value="Service"
                  >
                    Service
                  </Radio>
                  <Radio
                    _hover={{ bgColor: "inputHighlight" }}
                    bgColor="grey"
                    value="Event"
                  >
                    Event
                  </Radio>
                </HStack>
              </RadioGroup>
              <FormLabel as="legend" mt="20px" ml="5px">
                Add a title
              </FormLabel>
              <Input
                isRequired
                placeholder="name your service/event"
                focusBorderColor="inputHighlight"
                // border="2pt solid black"
                _hover={{ borderColor: "inputHighlight" }}
                size="lg"
              />
              <FormLabel as="legend" mt="20px" ml="5px">
                Add a date
              </FormLabel>
              <DatePicker initialValue={new Date()} />
              <FormLabel as="legend" mt="20px" ml="5px">
                Add a time
              </FormLabel>
              <HStack>
                <NumberInput
                  size="lg"
                  maxW="190px"
                  max={23}
                  defaultValue={0}
                  min={0}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Text fontSize="30px">:</Text>
                <NumberInput
                  size="lg"
                  maxW="190px"
                  max={59}
                  defaultValue={0}
                  min={0}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </HStack>
              <FormLabel as="legend" mt="20px" ml="5px">
                Add a location
              </FormLabel>
              <Input
                isRequired
                placeholder="location"
                focusBorderColor="inputHighlight"
                // border="2pt solid black"
                _hover={{ borderColor: "inputHighlight" }}
                size="lg"
              />
              <FormLabel as="legend" mt="20px" ml="5px">
                Add a description
              </FormLabel>
              <Textarea
                isRequired
                placeholder="description"
                focusBorderColor="inputHighlight"
                // border="2pt solid black"
                _hover={{ borderColor: "inputHighlight" }}
                size="lg"
              />

              <Button
                mt="25px"
                w="100%"
                bgColor="black"
                type="submit"
                _hover={{ bgColor: "inputHighlight", color: "black" }}
                color="white"
              >
                Create
              </Button>
            </Box>
          </VStack>

          <FormControl
            as="fieldset"
            border="2pt solid black"
            borderRadius="lg"
            bgColor="whitesmoke"
            shadow="3px 3px rgba(0, 0, 0, 0.78)"
          >
            <FormLabel as="legend" fontSize="2xl" m="20px" p="10px" pb="16px">
              Add your photos
            </FormLabel>
            <VStack p="10px">
              <FileUpload buttonID="secretButton1" photoNum="1" />
              <FileUpload buttonID="secretButton2" photoNum="2" />
              <FileUpload buttonID="secretButton3" photoNum="3" />
              <FileUpload buttonID="secretButton4" photoNum="4" />
              <FileUpload buttonID="secretButton5" photoNum="5" />
            </VStack>
          </FormControl>
        </HStack>
      </Center>
    </VStack>
  );
}
