import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import EducationItem from './EducationItem/EducationItem';

class Education extends Component {
  render() {
    return (
      <ScrollAnimation className="EducationSection" animateIn="fadeIn">
      <div className="justify-content-center d-flex p-2 mt-5" id="myeducation">
        <h3 className="font-weight-bold"> Education </h3></div>
        <EducationItem
          textLeftUp='2011 - 2014'
          textLeftDown='High School'
          textRightUp='Graduated'
          textRightDown='Nguyễn Huệ High School'
        />

        <EducationItem 
          textLeftUp='2014 - ...'
          textLeftDown='University'
          textRightUp='Computer Science and Technology Majors'
          textRightDown='Thăng Long University'
        />

        <EducationItem
          textLeftUp='2017 - 2018'
          textLeftDown='Certification'
          textRightUp='Code For Everyone Graduated'
          textRightDown='Techkids VN'
        />
      </ScrollAnimation>
    )
  }
}

export default Education;
