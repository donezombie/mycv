import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

class EducationItem extends Component {
  render() {
    const {
      textLeftUp,
      textLeftDown,
      textRightUp,
      textRightDown,
    } = this.props;
    return (
      <div className="row mt-3">
        <div className="offset-md-2" />
        <div className="col-md-8 border border-0 shadow">
          <Row className="EducationItem">
            <Col data-aos="fade-right" className="p-0 leftBackground d-flex justify-content-center align-items-center flex-column" md={{size: 3}}>
              <div className=" d-flex justify-content-center align-items-center">
                <p className="p-2 m-0 text-light">{textLeftUp}</p>
              </div>
              <div className=" d-flex justify-content-center align-items-center">
                <p className=" pb-2 m-0 text-light font-weight-bold" style={{ fontSize: '25px'}}> {textLeftDown} </p>
              </div>
            </Col>
            <Col data-aos="fade-left" className="pl-5 pt-3" md={{size: 7}}>
              <div className="text1">
                <p className="m-0">{textRightUp}</p>
              </div>
              <div className="text2">
                <p>{textRightDown}</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>      
    )
  }
}

export default EducationItem;
