import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import Switch from "react-switch";

import { useTheme } from "../../context/Theme";

function Header() {
  const { theme, toggle } = useTheme();

  return (
    <div>
      <Navbar bg={theme} variant={theme}>
        <Navbar.Brand href="#home">To-do App</Navbar.Brand>
        <Nav className="mr-auto" />
        <Form inline>
          <Switch
            checked={theme === "dark"}
            onChange={toggle}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
