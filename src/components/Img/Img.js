import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import bg from '../../images/bg2.jpg';
import logofb from '../../images/logofb.jpg';
import { imgAvatar, name } from '../../control_handle';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Img extends Component {

  render() {
    return (
      <div className="background-header d-flex justify-content-center align-items-center">
        <div className="text-light d-flex flex-column align-items-center">
          <a href="https://facebook.com/donezombiee" target="_blank" rel="noopener noreferrer"><img className="animated fadeIn" id="avatar" src={imgAvatar} /></a>

          <div className="mt-4">
            <h3 className="text-center font-weight-bold">{name}</h3>
            <p className="text-center font-weight-bold text-uppercase">Front-end WEB Developer</p>
          </div>

          <div className="w-100 mt-4 d-flex justify-content-around">
            <AnchorLink offset={() => 100} href="#aboutme"><button type="button" className="btn btn-outline-light">About Me</button></AnchorLink>
            <button type="button" className="btn btn-outline-light">Button 2</button>
          </div>
        </div>
        <div id="footerImg" className="d-flex justify-content-center text-light">
           <a href="https://facebook.com/donezombiee" target="_blank" rel="noopener noreferrer">
              <img className="logo animated fadeInDown" src={logofb}/>
           </a>
        </div>
      </div>
    );
  }
}
  
  
export default Img;