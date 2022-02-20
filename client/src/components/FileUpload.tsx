import { FormLabel, Input, Text } from "@chakra-ui/react";

type Props = {
  buttonID: string;
  photoNum: string;
};

export function FileUpload({ buttonID, photoNum }: Props) {
  return (
    <>
      <FormLabel
        m="auto"
        p="15px"
        bgColor="black"
        color="white"
        borderRadius="lg"
        htmlFor={buttonID}
      >
        Upload photo # {photoNum}
      </FormLabel>
      <Input id={buttonID} hidden type="file"></Input>
      <Text>No file chosen</Text>
    </>
  );
}
