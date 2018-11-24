import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import TableProps from './Table/TableProps';
  
class AboutMe extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" delay={0}>
        <div className="justify-content-center d-flex p-2"><h3 className="font-weight-bold"> About Me </h3></div>
        <div id="aboutme" className="row mb-5 animated fadeIn">
          <div className="offset-md-2" />
          <div className="col-md-8 border border-0 shadow p-3 ">
                <div className="row">
                    <div id="aboutText" className="col-md-5">
                        <h3 className="pb-3 font-weight-bold" style={{display: "none"}}>About Me</h3>
                        <p>Hi guys! I'm a Front-end Web Developer.</p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    </div>
                    <div className="col-md-7 d-flex justify-content-center">
                      <h3 className="pb-3 font-weight-bold" style={{display: "none"}}>Profile</h3>
                      <div className="d-flex justify-content-center">

                          <TableProps 
                            dob='05/12/1996'
                            relationship= 'Single'
                            email='donezombie@gmail.com'
                            phoneNumber='039 5029 800'
                            address='68 Trieu Khuc St - Ha Noi City'
                            hobby='Coffe, Coding, Play Game, Look at Sexy Girl'
                          />

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