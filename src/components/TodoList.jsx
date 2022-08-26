import { Box, OrderedList } from "@chakra-ui/react";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  //varios
  const [todos, setTodos] = useState([]);

  const agregarTodo = (todo) => {
    //todoo es el valor del setState de  todoForm

    setTodos((old) => [...old, todo]);
  };

  const eliminarTodo = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id));
  };

  const onCompleted = (id) => {
    const tareasActualizadas = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(tareasActualizadas)
  };

  return (
    <>
      <TodoForm agregarTodo={agregarTodo} />
      <Box width="80%" mt="10">
        <ul width="100%">
          {todos.map((item) => (
            <Todo
              key={item.id}
              todo={item}
              eliminarTodo={eliminarTodo}
              onCompleted={onCompleted}
            />
          ))}
        </ul>
      </Box>
    </>
  );
};

export default TodoList;
