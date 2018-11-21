import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col } from 'reactstrap';
  
class AboutMe extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" delay="0">
        <div className="justify-content-center d-flex p-2"><h3 className="font-weight-bold"> About Me </h3></div>
        <div id="aboutme" className="row mb-5 animated fadeIn">
          <div className="offset-md-2" />
          <div className="col-md-8 border border-0 shadow p-3 ">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="pb-3 font-weight-bold" style={{display: "none"}}>About Me</h3>
                        <p>Hi guys! I'm a Front-end Web Developer.</p>
                    </div>
                    <div className="col-md-6">
                      <h3 className="pb-3 font-weight-bold" style={{display: "none"}}>Profile</h3>
                      <div className="d-flex justify-content-center"> 
                        <div id="title" className="col-md-4">
                          <p>Date Of Birth: </p>
                          <p>Relationship: </p>
                          <p>Email: </p>
                          <p>Phone Number: </p>
                          <p>Address: </p>
                          <p>Hobby: </p>
                        </div>
                        <div className="col-md-8">
                          <p>05/12/1996</p>
                          <p>Single</p>
                          <p>donezombie@gmail.com</p>
                          <p>0395 029 800</p>
                          <p>68 Trieu Khuc St - Ha Noi City</p>
                          <p>Coffe, Coding, PlayGame, Look at Sexy Girl </p>
                        </div>
                      </div>
                    </div>
                </div>
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}
  
  
export default AboutMe;