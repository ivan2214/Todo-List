import {
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import React from "react";

const Todo = ({ todo }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="whiteAlpha.200"
      width="100%"
      mt="2"
      mb="5"
      textAlign="left"
      padding="5"
      borderRadius="xl"
      gap="10"
      
    >
      <Editable defaultValue={todo.task} width="100%" >
        <EditablePreview width="100%" padding="5" />
        <EditableInput width="100%" padding="5" />
      </Editable>
      <Button colorScheme="facebook">✔</Button>
      <Button colorScheme="facebook">X</Button>
    </Box>
  );
};

export default Todo;
