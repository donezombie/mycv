import React, { Component } from 'react';
  
  
class Nav extends Component {
  render() {
    return (
      <div className="animated fadeInDown faster fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="https://fb.com/donezombiee">Phạm Phú Quý Đôn</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#">Về Tôi</a>
              <a className="nav-item nav-link" href="#">Liên Hệ</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
  
  
export default Nav;