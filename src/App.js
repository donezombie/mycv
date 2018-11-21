import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigations from './components/Navbar/Navbar';
import Img from './components/Img/Img';
import Wrap from './components/Wrap/Wrap';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="App">
        <header>
        <Navigations />
        <Img />
        </header>
        <Wrap />
        <footer className="mt-5">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
