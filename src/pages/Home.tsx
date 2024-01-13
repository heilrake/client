import { TodoList } from "../components/TodoList.tsx";
import { AddTodo } from "../components/AddTodo.tsx";
export const Home = () => {
  return (
    <>
      <TodoList />
      <AddTodo />
    </>
  );
};
