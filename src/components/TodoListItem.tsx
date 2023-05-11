import React from "react";

interface ITodoItem {
  todo: TodoType;
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

const TodoListItem: React.FC<ITodoItem> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li>
      {todo.isDone ? (
        <p onClick={() => toggleTodo(todo)} className="checked">
          {todo.task}
        </p>
      ) : (
        <p onClick={() => toggleTodo(todo)}>{todo.task}</p>
      )}
      <p onClick={() => deleteTodo(todo.id)} className="task-icons">
        X
      </p>
    </li>
  );
};

export default TodoListItem;
