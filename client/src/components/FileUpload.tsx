import { useState } from "react";

import { FormLabel, Input, Text } from "@chakra-ui/react";

type Props = {
  buttonID: string;
  photoNum: string;
  pic: string;
  setPic: string;
};

export function FileUpload({ buttonID, photoNum, pic, setPic }: Props) {
  return (
    <>
      <FormLabel
        m="auto"
        p="15px"
        bgColor="black"
        color="white"
        borderRadius="lg"
        htmlFor={buttonID}
        _hover={{ bgColor: "blue", color: "white" }}
      >
        Upload photo # {photoNum}
      </FormLabel>
      <Input
        id={buttonID}
        hidden
        type="file"
        accept=".jpg, .png, .jpeg"
      ></Input>
      <Text>No file chosen</Text>
    </>
  );
}
