import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <Col md={{size: 8, offset: 2}}>
        <div className="h-100 d-flex justify-content-center align-items-center">
          <p className="text-light">Sample Text</p>
        </div>
      </Col>
    )
  }
}

export default Footer;
