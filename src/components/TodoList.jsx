import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  //varios
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("tarea");

    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarea", JSON.stringify(todos));
  }, [todos]);

  //agregar tarea

  const agregarTodo = (todo) => {
    //todoo es el valor del setState de  todoForm

    setTodos((old) => [...old, todo]);
  };

  //eliminar tarea

  const eliminarTodo = (id, task) => {
    const isDeleted = window.confirm(`deseas eliminar la tarea : ${task} ?`);

    if (isDeleted) {
      var newTask = todos.filter((item) => item.id !== id);
      setTodos(newTask);
    }
    

  };

  //tarea completada

  const onCompleted = (id) => {
    const tareasActualizadas = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(tareasActualizadas);
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
