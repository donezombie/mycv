import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col } from 'reactstrap';
import EducationItem from './EducationItem/EducationItem';

class Education extends Component {
  render() {
    return (
      <ScrollAnimation className="EducationSection" animateIn="fadeIn">
      <div className="justify-content-center d-flex p-2 mt-5">
        <h3 className="font-weight-bold"> Education </h3></div>
        <EducationItem 
          textLeftUp='2014 - ...'
          textLeftDown='University'
          textRightUp='Computer Science and Technology Majors'
          textRightDown='Thăng Long University'
        />

        <EducationItem
          textLeftUp='2017 - 2018'
          textLeftDown='Certification'
          textRightUp='Code For Everyone'
          textRightDown='Techkids VN'
        />

        <EducationItem
          textLeftUp='2014 - ...'
          textLeftDown='University'
          textRightUp='Computer Science and Technology Majors'
          textRightDown='Thăng Long University'
        />

        <EducationItem
          textLeftUp='2014 - ...'
          textLeftDown='University'
          textRightUp='Computer Science and Technology Majors'
          textRightDown='Thăng Long University'
        />
      </ScrollAnimation>
    )
  }
}

export default Education;
