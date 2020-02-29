import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav/Nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
