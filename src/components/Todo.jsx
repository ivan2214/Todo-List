import { Box, Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Todo = ({ todo, eliminarTodo, onCompleted }) => {
  const { task, id, completed } = todo;

  return (
    <Box
      display="flex"
      width="100%"
      flexWrap="wrap"
      justifyContent={["center", "space-between"]}
      alignItems="center"
      bg="whiteAlpha.200"
      mt="2"
      flexDirection={["column", "row"]}
      mb="5"
      textAlign="left"
      padding="5"
      borderRadius="xl"
      gap="10"
    >
      <Text
        display="flex"
        flexDirection={["row"]}
        textTransform="capitalize"
        fontSize={"2xl"}
        color={completed ? "green.500" : "red.500"}
        textDecoration={completed ? "line-through" : "none"}
        width={{
          base: "100%",
          sm: "50%",
          md: "65%",
          lg: "70%",
        }}
      >
        📒{task}
      </Text>

      <Flex
        minWidth="max-content"
        width={{ base: "100%", sm: "50%", md: "10%" }}
        
        justify="center"
        alignItems="center"
        gap={["2", "10"]}
      >
        <Button
          width={{ base: "100%", sm: "50%", md: "25%" }}
          colorScheme="facebook"
        >
          <Checkbox
            type="checkbox"
            checked={completed}
            onChange={() => onCompleted(id)}
          />
        </Button>

        <Button
          width={{ base: "100%", sm: "50%", md: "25%" }}
          colorScheme="facebook"
          onClick={() => eliminarTodo(id, task)}
        >
          X
        </Button>
      </Flex>
    </Box>
  );
};

export default Todo;
