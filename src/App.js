import React from "react";

import ThemeProvider from "./context/Theme";
import TodoProvider from "./context/Todos";

import Header from "./components/Header";
import AddTodo from "./components/AddTodoForm";
import Todos from "./components/Todos";

import { Container } from "react-bootstrap";

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Header />
        <Container fluid>
          <AddTodo />
          <Todos />
        </Container>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
