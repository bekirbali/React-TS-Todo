import React from "react";

interface ITodoItem {
  todo: TodoType;
}

const TodoListItem: React.FC<ITodoItem> = ({ todo }) => {
  return <div>TodoListItem</div>;
};

export default TodoListItem;
