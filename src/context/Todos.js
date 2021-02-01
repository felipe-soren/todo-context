import React from "react";

const TodosContext = React.createContext();

export default function TodosProvider({ children }) {
  const [todos, setTodos] = React.useState(["test"]);

  function addTodo(todo) {
    setTodos((prev) => [...prev, todo]);
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  const context = React.useContext(TodosContext);
  if (!context) throw new Error("useTodos must be used within a TodosProvider");
  const { todos, addTodo } = context;
  return { todos, addTodo };
}
