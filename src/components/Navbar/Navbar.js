import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
  
class Navigations extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isTop: true,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 750;
      if (isTop !== this.state.isTop) {
        this.setState({
          isTop,
        })
      }
    })
  }

  render() {
    const { isTop } = this.state;
    return (
      <nav className={isTop ? 'fixed-top navbar navbar-expand-lg navbar-dark' : 'fixed-top navbar navbar-expand-lg navbar-dark bg-black'}>
        <AnchorLink className="navbar-brand" offset={() => 150} href="#home">Home</AnchorLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <AnchorLink className="nav-link" offset={() => 150} href="#aboutme">About Me</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" offset={() => 150} href="#myskill">My Skills</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" offset={() => 150} href="#myeducation">Education</AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
  
  
export default Navigations;