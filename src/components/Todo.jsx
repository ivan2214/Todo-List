import { Box, Button, Checkbox, Text } from "@chakra-ui/react";
import React from "react";

const Todo = ({ todo, eliminarTodo, onCompleted }) => {
  const { task, id, completed } = todo;

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
      <Checkbox type="checkbox" checked={completed} onChange={() => onCompleted(id)} />

      <Text textTransform="capitalize" textDecoration={completed ? "line-through" : "none"} width="100%">
        {task}
      </Text>
      <Button colorScheme="facebook" onClick={() => eliminarTodo(id)}>
        X
      </Button>
    </Box>
  );
};

export default Todo;
