import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class BackToHome extends Component {

  render() {
    return (
      <div id="ButtonBack">
        <AnchorLink id="back" offset={() => 150} href="#home"> 
          <i className="fas fa-chevron-circle-up"></i>
        </AnchorLink>
      </div>
    )
  }
}

export default BackToHome;
