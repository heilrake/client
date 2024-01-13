import { useMutation, useQuery } from "@apollo/client";
import { ALL_TODO, DELETE_TODO, UPDATE_TODO } from "../apollo/todos.ts";
import { TodoItem } from "./TodoItem.tsx";

export const TodoList = () => {
  const { loading, error, data } = useQuery(ALL_TODO);
  const [toggleTodo, { error: updateError }] = useMutation(UPDATE_TODO);
  const [removeTodo, { error: removeError }] = useMutation(DELETE_TODO, {
    update(cache, { data: { removeTodo } }) {
      cache.modify({
        fields: {
          allTodos(currentTodos = []) {
            return currentTodos.filter(
              (todo) => todo.__ref !== `Todo:${removeTodo.id}`,
            );
          },
        },
      });
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error | updateError | removeError) {
    return <p>Error</p>;
  }

  return (
    <>
      <h2>My Todos</h2>
      {data.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          onToggle={toggleTodo}
          onDelete={removeTodo}
          {...todo}
        />
      ))}
    </>
  );
};
