import { Box, OrderedList } from "@chakra-ui/react";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  //varios
  const [todos, setTodos] = useState([]);

  const agregarTodo = (todo) => {
    //todoo es el valor del setState de  todoForm
    console.log(todo);
    setTodos((old) => [...old, todo]);
  };

  return (
    <>
      <TodoForm agregarTodo={agregarTodo} />
      <Box width="70%" mt="10">
        <ul width="100%">
          {todos.map((item) => (
            <Todo key={item.id} todo={item} />
          ))}
        </ul>
      </Box>
    </>
  );
};

export default TodoList;
