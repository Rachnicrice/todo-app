import React from 'react';
import { Navbar, Button, Alignment } from '@blueprintjs/core';

const Header = (props) => {
  
  return (
    <>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>To Do List: {props.incomplete} items pending</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="user" text="Settings" />
        </Navbar.Group>
      </Navbar>
    </>
  );
};

export default Header;