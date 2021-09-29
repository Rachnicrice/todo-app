import React, { useState, useContext }from 'react';
import { AuthContext } from '../../context/Auth';
import { Navbar, Button, Alignment } from '@blueprintjs/core';
import {If, Then, Else} from 'react-if';


const Header = (props) => {

  const authContext = useContext(AuthContext);
  const [login, setLogin] = useState({});

  const handleChange = (e) => {
    setLogin( {...login, [e.target.name]: e.target.value} );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authContext.login(login);
  };
  
  return (
    <>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>To Do List: {props.incomplete} items pending</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="user" text="Settings" />

          <If condition={authContext.isLoggedIn}>
            <Then>
              Welcome {authContext.user.fullname} ...
              <button onClick={authContext.logout}>Log Out</button>
            </Then>
            <Else>
              <form onSubmit={handleSubmit}>
                <input name="username" onChange={handleChange} placeholder="Username" />
                <input name="password" type="password" onChange={handleChange} placeholder="Password" />
                <button type="submit">Log In</button>
              </form>
            </Else>
          </If>
        </Navbar.Group>
      </Navbar>
    </>
  );
};

export default Header;