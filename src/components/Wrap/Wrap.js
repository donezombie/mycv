import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Skill from './Skill';
  
  
class Wrap extends Component {
  render() {
    return (
      <div className="mt-5 wrap">
          <AboutMe />
          <Skill />
      </div>
    );
  }
}
  
  
export default Wrap;