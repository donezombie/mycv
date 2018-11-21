import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Skill from './Skill';
import Education from './Education';
import BackToHome from './BackToHome';
  
  
class Wrap extends Component {
  render() {
    return (
      <div className="mt-5 wrap">
          <AboutMe />
          <Skill />
          <Education />
          <BackToHome />
      </div>
    );
  }
}
  
  
export default Wrap;