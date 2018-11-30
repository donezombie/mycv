import React, { Component } from 'react';
import { Row } from 'reactstrap';
import './App.css';
import Navigations from './components/Navbar/Navbar';
import Img from './components/Img/Img';
import Wrap from './components/Wrap/Wrap';
import Footer from './components/Footer/Footer';
import './Card.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="App">
        <Row>
          <Navigations />
          <Img />
        </Row>
        <Wrap />
        <Row id="footer" className="mt-5">
          <Footer />
        </Row>
      </div>
    );
  }
}

export default App;
