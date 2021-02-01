import React from "react";
import { useTodos } from "../../context/Todos";

import { Form } from "react-bootstrap";

function AddTodoForm() {
  const [todoInput, setTodoInput] = React.useState("");

  const { addTodo } = useTodos();

  function formSubmit(e) {
    e.preventDefault();
    if (todoInput === "") return;
    addTodo(todoInput);
    setTodoInput("");
  }

  return (
    <Form onSubmit={formSubmit}>
      <Form.Label>Todo</Form.Label>
      <Form.Control
        as="input"
        placeholder="New Todo"
        type="text"
        name="todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
    </Form>
  );
}

export default AddTodoForm;
