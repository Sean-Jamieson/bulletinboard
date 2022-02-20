import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
  Editable as ChakraEditable,
  EditableInput,
  EditablePreview,
  ButtonGroup,
  IconButton,
  Flex,
  useEditableControls,
} from "@chakra-ui/react";

type Props = {
  textContent: string;
  fontSize?: string;
  textAlign?: "left";
};

export function Editable({ fontSize, textAlign, textContent }: Props) {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          aria-label="check"
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label="close"
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          aria-label="edit"
          size="sm"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }
  return (
    <ChakraEditable
      textAlign={textAlign ?? "center"}
      defaultValue={textContent}
      fontSize={fontSize ?? "2xl"}
      isPreviewFocusable={false}
    >
      <EditablePreview />
      <EditableInput />
      <EditableControls />
    </ChakraEditable>
  );
}
