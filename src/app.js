import React from 'react';

import ToDo from './components/todo/todo.js';
import SiteContext from './context/Site.js';

export default class App extends React.Component {
  render() {
    return (
      <SiteContext>
        <ToDo />
      </SiteContext>
    );
  }
}