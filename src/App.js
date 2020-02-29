import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LogIn from './components/LogIn/LogIn.js';
import Nav from './components/Nav/Nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <LogIn />
      </div>
    );
  }
}

export default App;
