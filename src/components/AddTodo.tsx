import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_TODO, ALL_TODO } from "../apollo/todos.ts";

export const AddTodo = () => {
  const [text, setText] = useState("");
  const [addTodo, { error }] = useMutation(ADD_TODO, {
    update(cache, { data: { newTodo } }) {
      const { todos } = cache.readQuery({ query: ALL_TODO });

      cache.writeQuery({
        query: ALL_TODO,
        data: {
          todos: [newTodo, ...todos],
        },
      });
    },
  });

  const handleAddTodo = () => {
    if (text.trim().length) {
      addTodo({
        variables: {
          id: Date.now(),
          title: text,
          completed: false,
          userId: 123,
        },
      });
      setText("");
    }
  };

  if (error) {
    return <p>Error</p>;
  }

  return (
    <Form onFinish={handleAddTodo} style={{ display: "flex", gap: "20px" }}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "250px" }}
      />
      <Button type="primary" htmlType="submit">
        Add Todo
      </Button>
    </Form>
  );
};
