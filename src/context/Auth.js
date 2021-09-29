import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

export const AuthContext = React.createContext();

const SECRET = 'supersecret';
const API = 'https://api-js401.herokuapp.com/signin';

function Auth(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = async (input) => {
    try {
      const response = await axios.post(API, {}, {
        auth: {
          username: input.username,
          password: input.password,
        },
      });

      setIsLoggedIn(true);
      setUser(response.data.user);
      cookie.save('auth', response.data.token);
    } catch(e) {
      console.error(e.message);
    }
  };

  const logout = () => {
    // TODO: Call API logout function
    cookie.remove('auth');
    setIsLoggedIn(false);
  };

  const context = {
    isLoggedIn,
    user,
    login,
    logout,
  };

  useEffect( () => {
    const token = cookie.load('auth') || null;
    try {
      const tokenUser = jwt.verify(token, SECRET);
      setUser(tokenUser);
      setIsLoggedIn(true);
    } catch(e) {
      console.error('Invalid Token');
    }
  }, []);

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );

}

export default Auth;