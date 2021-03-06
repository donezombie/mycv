import React, { Component } from 'react';
import logofb from '../../images/logofb.jpg';
import { imgAvatar, name } from '../../control_handle';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './index.css';
class Img extends Component {

  componentDidMount() {
    const parallexFunc = () => {
      const DOMhome = document.getElementById('home');
      DOMhome.style.top = -(window.pageYOffset / 5 ) + 'px';
    }
    window.addEventListener('scroll', parallexFunc, false);
  }

  render() {
    return (
      <div id="wrapHeader">
        <div id="parallex"></div>
        <div id="home" className="d-flex justify-content-center align-items-center">
          <div className="text-light d-flex flex-column align-items-center">
            <a href="https://facebook.com/donezombiee" target="_blank" rel="noopener noreferrer">
              <img alt="avatar" className="animated fadeIn avatar-shadowAnimation" id="avatar" src={imgAvatar} />
            </a>

            <div className="mt-4">
              <h2 className="text-center font-weight-bold">{name}</h2>
              <p className="text-center font-weight-bold text-uppercase">Front - end WEB Developer</p>
            </div>

            <div className="w-100 mt-4 d-flex justify-content-around">
              <AnchorLink offset={() => 150} href="#aboutme">
                <button type="button" className="buttonCustomize">
                  <p style={{margin: 0}}>More Info</p><i className="fas fa-angle-double-down"></i>
                </button>
              </AnchorLink>
              {/* <button type="button" className="btn btn-outline-light">Button 2</button> */}
            </div>
          </div>
          <div id="footerImg" className="d-flex justify-content-center text-light">
            <a href="https://facebook.com/donezombiee" target="_blank" rel="noopener noreferrer">
                <img alt="logo" className="logo animated fadeInDown" src={logofb}/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
  
  
export default Img;