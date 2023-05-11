import React from "react";

interface ITodoItem {
  todo: TodoType;
}

const TodoListItem: React.FC<ITodoItem> = ({ todo }) => {
  return (
    <div>
      {todo.isDone ? (
        <p className="checked">{todo.task}</p>
      ) : (
        <p>{todo.task}</p>
      )}
    </div>
  );
};

export default TodoListItem;
