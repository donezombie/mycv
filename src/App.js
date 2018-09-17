import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/Nav';
import Img from './components/Img/Img';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <Nav />
        <Img />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
