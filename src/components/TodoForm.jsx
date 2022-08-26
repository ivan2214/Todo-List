import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const TodoForm = ({ agregarTodo }) => {
  //solo uno

  const initialState = {
    id: "",
    task: "",
    completed: false,
  };

  const [todo, setTodo] = useState(initialState);

  function handleTaskInputChange(e) {
    setTodo((old) => ({ ...todo, task: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.task.trim()) {
      e.target[0].focus();
      Swal.fire({
        tittle: "Error!",
        text: "no dejar la tarea en blanco",
        icon: "error",
      });
      return;
    }
    //resetear tarea del input
    setTodo(initialState);
    agregarTodo({ task: todo.task, completed: todo.completed, id: uuidv4() });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box display="grid" placeItems="center">
          
          <Input
            display="grid"
            placeItems="center"
            width="100%"
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
            placeholder="ingresar tarea"
          />
          <Button
            mt="5"
            width="100%"
            textAlign="center"
            type="submit"
            colorScheme="facebook"
          >
            agregar
          </Button>
        </Box>
      </form>
    </>
  );
};

export default TodoForm;
