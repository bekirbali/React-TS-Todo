import TodoListItem from "./TodoListItem";

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
