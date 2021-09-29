import React from 'react';

import SiteContext from './context/Site.js';
import AuthContext from './context/Auth.js';

import ToDo from './components/todo/todo.js';
import './scss/app.scss';

export default class App extends React.Component {
  render() {
    return (
      <SiteContext>
        <AuthContext>
          <ToDo />
        </AuthContext>
      </SiteContext>
    );
  }
}