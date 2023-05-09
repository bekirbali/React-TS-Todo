import axios from "axios";
import React, { useState, useEffect } from "react";

const url = "https://645a917b65bd868e931ed42c.mockapi.io/todos";

interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return <div>Home</div>;
};

export default Home;
