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
  Select,
} from "@chakra-ui/react";
import { DatePicker } from "@orange_digital/chakra-datepicker";
import { useState } from "react";

import { FileUpload } from "../components/FileUpload";
import { SelectMap } from "../components/SelectMap";
import { CreateInput, useCreateService } from "../hooks/useCreateService";
import { useCreateEvent } from "../hooks/useCreateEvent";
import { useAuth0 } from "@auth0/auth0-react";
// import { useState } from "react";

const getCookie = (name: string): string | undefined => {
  var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
};

export function CreatePost() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [radioValue, setRadioValue] = useState(1);
  const [type, setType] = useState("");
  const [pics, setPics] = useState("");
  const handleLocationChange = (lat: number, lng: number) => {
    setLocation({ lat, lng });
  };
  const { isAuthenticated, loginWithRedirect }: any = useAuth0();

  const convertToBase64 = (file: any): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileRead = async (event: any) => {
    let b64string: string = "";

    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      const base64 = await convertToBase64(file);
      b64string = base64 + "~" + b64string;
    }

    setPics(b64string);
  };

  const [createService] = useCreateService();
  const [createEvents] = useCreateEvent();
  const handleFormSubmit = (e: any) => {
    date.setHours(hour);
    date.setMinutes(minute);

    const pictures = pics.split("~");

    const data: CreateInput = {
      title: title,
      organizer: getCookie("email") ?? "",
      description: description,
      type: type,
      date: date,
      lat: location.lat,
      lng: location.lng,
      pictures: pictures,
    };

    if (radioValue === 0) {
      createService(data);
    } else {
      createEvents(data);
    }

    //convertToBase64(document.querySelector("#pic_upload").files[0])
    //.then(value => {

    //});

    setTitle("");
    setDate(new Date());
    setMinute(0);
    setHour(0);
    setDescription("");
    setLocation({ lat: 0, lng: 0 });
    setRadioValue(1);
    setType("");
    setPics("");

    e.preventDefault();
  };

  return (
    <>
      {isAuthenticated ? (
        <VStack w="100%">
          <Center w="100%">
            <VStack h="fit-content" px="10">
              <FormControl>
                <Box
                  as="fieldset"
                  border="2pt solid black"
                  borderRadius="lg"
                  p="20px"
                  bgColor="whitesmoke"
                  minW="500px"
                >
                  <FormLabel as="legend" fontSize="4xl" p="10px" pb="16px">
                    Create your post
                  </FormLabel>
                  <FormLabel as="legend" mt="-20px" ml="10px">
                    I'm providing a...
                  </FormLabel>
                  <RadioGroup
                    defaultValue={radioValue}
                    value={radioValue}
                    ml="10px"
                  >
                    <HStack spacing="36px">
                      <Radio
                        value={0}
                        onChange={(e) => setRadioValue(0)}
                        _hover={{ bgColor: "inputHighlight" }}
                        bgColor="grey"
                      >
                        Service
                      </Radio>
                      <Radio
                        value={1}
                        onChange={(e) => setRadioValue(1)}
                        _hover={{ bgColor: "inputHighlight" }}
                        bgColor="grey"
                      >
                        Event
                      </Radio>
                    </HStack>
                  </RadioGroup>
                  <FormLabel as="legend" mt="20px" ml="5px">
                    Select a category
                  </FormLabel>
                  <Select
                    size="lg"
                    value={type}
                    defaultValue="Fitness"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="Fitness">Fitness</option>
                    <option value="night life">Night Life</option>
                    <option value="cultural food">Cultural Food</option>
                    <option value="nature experiences">
                      Nature Experiences
                    </option>
                    <option value="workshops and self improvement">
                      Workshops and Self Improvement
                    </option>
                    <option value="gardening and plants">
                      Gardening and Plants
                    </option>
                    <option value="group talk and conversations">
                      Group Talk and Conversations
                    </option>
                    <option value="children">Children</option>
                    <option value="family">Family</option>
                    <option value="sports and games">Sports and Games</option>
                  </Select>
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
                    initialValue={new Date(date)}
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
                  <FormControl
                    as="fieldset"
                    border="1pt solid black"
                    borderRadius="lg"
                    bgColor="whitesmoke"
                  >
                    <FormLabel
                      as="legend"
                      fontSize="xl"
                      m="20px"
                      p="10px"
                      pb="16px"
                    >
                      Add your photos
                    </FormLabel>

                    <Center>
                      <Input
                        w="250px"
                        mb="30px"
                        type="file"
                        name="myFile"
                        id="img1"
                        multiple
                        accept=".jpeg, .png, .jpg"
                        onChange={(e) => {
                          if (
                            e &&
                            e.target &&
                            e.target.files &&
                            e.target.files[0]
                          ) {
                            handleFileRead(e);
                          }
                        }}
                      />
                    </Center>
                  </FormControl>

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
          </Center>
        </VStack>
      ) : (
        <Center style={{ width: "100vw", height: "70vh" }}>
          <Button
            bgColor="headerbg"
            size="lg"
            onClick={() => loginWithRedirect()}
          >
            Click here to login.
          </Button>
        </Center>
      )}
    </>
  );
}
