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
import { useState } from "react";

import { FileUpload } from "../components/FileUpload";
import { SelectMap } from "../components/SelectMap";

// import { useState } from "react";

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [Serv, setServ] = useState("");
  const [Eve, setEve] = useState("");
  const handleLocationChange = (lat: number, lng: number) => {
    setLocation({ lat, lng });
  };

  const handleFormSubmit = (e: any) => {
    // const title = document.querySelector("#event_title").value;
    // const description = document.querySelector("#event_desc").value;
    // const type = document.querySelector("#event_type").value;
    // const location = document.querySelector("#event_location").value;
    // const date = document.querySelector("#event_date").value;
    // const organizer = getCookie("email");

    // const data = {
    //   title: title,
    //   organizer: organizer,
    //   description: description,
    //   type: type,
    //   date: date,
    // };
    // alert(`POSTED! ${JSON.stringify(data)}`);
    if (Serv) {
      // postData(`http://localhost:3000/api/${radio_status}/create`, data);
    }

    //convertToBase64(document.querySelector("#pic_upload").files[0])
    //.then(value => {

    //});
    else e.preventDefault();
  };

  console.log(location);

  return (
    <VStack w="100%">
      <Center w="100%">
        <HStack>
          <VStack h="fit-content" px="10">
            <FormControl>
              <Box
                as="fieldset"
                border="2pt solid black"
                borderRadius="lg"
                p="20px"
                bgColor="whitesmoke"
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
                      value={Serv}
                      onChange={(e) => setServ(e.target.value)}
                      _hover={{ bgColor: "inputHighlight" }}
                      bgColor="grey"
                    >
                      Service
                    </Radio>
                    <Radio
                      value={Eve}
                      onChange={(e) => setEve(e.target.value)}
                      _hover={{ bgColor: "inputHighlight" }}
                      bgColor="grey"
                    >
                      Event
                    </Radio>
                  </HStack>
                </RadioGroup>
                <FormLabel as="legend" mt="20px" ml="5px">
                  Add a title
                </FormLabel>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  isRequired
                  placeholder="name your service/event"
                  focusBorderColor="inputHighlight"
                  _hover={{ borderColor: "inputHighlight" }}
                  size="lg"
                  id="postName"
                />
                <FormLabel as="legend" mt="20px" ml="5px">
                  Add a date
                </FormLabel>
                <DatePicker
                  initialValue={date}
                  onDateChange={(e) => setDate(e ?? new Date())}
                />
                <FormLabel as="legend" mt="20px" ml="5px">
                  Add a time
                </FormLabel>
                <HStack>
                  <NumberInput
                    value={hour}
                    onChange={(e) => setHour(Number(e))}
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
                    value={minute}
                    onChange={(e) => setMinute(Number(e))}
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
                <Box w="100%" h="320px" bgColor="black">
                  <SelectMap handleLocationChange={handleLocationChange} />
                </Box>
                <FormLabel as="legend" mt="20px" ml="5px">
                  Add a description
                </FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  isRequired
                  placeholder="description"
                  focusBorderColor="inputHighlight"
                  _hover={{ borderColor: "inputHighlight" }}
                  size="lg"
                />

                <Button
                  mt="25px"
                  w="100%"
                  bgColor="tag"
                  type="submit"
                  _hover={{ bgColor: "inputHighlight", color: "black" }}
                  color="white"
                  onClick={(e) => handleFormSubmit(e)}
                >
                  Create
                </Button>
              </Box>
            </FormControl>
          </VStack>

          <FormControl
            as="fieldset"
            border="2pt solid black"
            borderRadius="lg"
            bgColor="whitesmoke"
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
