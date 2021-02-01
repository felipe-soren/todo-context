import React from "react";
import { useTodos } from "../../context/Todos";
import { useTheme } from "../../context/Theme";
import { Table } from "react-bootstrap";

function Todos() {
  const { todos } = useTodos();
  const { theme } = useTheme();

  return (
    <Table bordered hover variant={theme} style={{ marginTop: "20px" }}>
      <thead>
        <th>To-do</th>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr>
            <td>{todo}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Todos;
