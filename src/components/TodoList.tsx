import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <div>
      TodoList
      {todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
