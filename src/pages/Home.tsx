import axios from "axios";
import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import InputForm from "../components/InputForm";

const url = "https://645a917b65bd868e931ed42c.mockapi.io/todos";

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo: AddFn = async (text) => {
    const newTodo = {
      task: text,
      isDone: false,
    };
    try {
      await axios.post(url, newTodo);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      Home
      <div>
        <InputForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default Home;
