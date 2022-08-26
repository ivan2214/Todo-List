import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100%"
      >
        <Text>TODO APP</Text>
        <TodoList />
      </Box>
    </>
  );
}

export default App;
