import React, { Component } from 'react';
import { Progress, Row, Col } from 'reactstrap';
import { Line, Circle } from 'rc-progress';
import ScrollAnimation from 'react-animate-on-scroll';


const maxHTML = 80;
const maxJS = 75;
const maxPython = 60;
const maxCSS = 80;
class Skill extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      html: 0,
      JavaScript: 0,
      python: 0,
      css: 0,
    }
    this.actionAfterAnimation = this.actionAfterAnimation.bind(this);
  }

  actionAfterAnimation(visible) {
    const { html, JavaScript, python, css } = this.state;
    if (visible.onScreen || visible.inViewPort) {
      if (html < maxHTML) {
        this.setState({
          html: html + 1,
        })
      }
      this.setState({
        JavaScript: 75,
        python: 60,
        css: 80,
      })
      console.log("inViewPoint");
    } else {
      this.setState({
        html: 0,
        JavaScript: 0,
        python: 0,
        css: 0,
      })
    }
  }

  // test() {
  //   const { html } = this.state;
  //   this.setState({
  //     html: html - 1,
  //   });
  // }

  render() {
    const { html, JavaScript, python, css } = this.state;
    return (
      <ScrollAnimation animateIn="fadeIn" afterAnimatedIn={(visible) => {this.actionAfterAnimation(visible)}}>
      <div className="row">
      {/* <button onClick={() => {this.test()}}>Test</button> */}
        <div className="offset-md-2" />
        <div className="col-md-8 border border-0 shadow p-3">
          <h3 className="pb-3 font-weight-bold"> Skill</h3>
          <Row>
            <Col md={{size: 3, offset: 2}}>
              <p>HTML {html}%</p>
              <Circle strokeLinecap="round" percent={html} strokeWidth="3" strokeColor="#1b1b1b" trailColor="#D3D3D3"/>
            </Col>

            <Col md={{size: 3, offset: 2}}>
              <p>JavaScript {JavaScript}%</p>
              <Circle percent={JavaScript} strokeWidth="3" strokeColor="#1b1b1b" trailColor="#D3D3D3" />  
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={{size: 3, offset: 2}}>
              <p>Python {python}%</p>
              <Circle percent={python} strokeWidth="3" strokeColor="#1b1b1b" trailColor="#D3D3D3"/>
            </Col>

            <Col md={{size: 3, offset: 2}}>
              <p>CSS {css}%</p>
              <Circle percent={css} strokeWidth="3" strokeColor="#1b1b1b" trailColor="#D3D3D3" />  
            </Col>
          </Row>
        </div>
      </div>
      </ScrollAnimation>
    );
  }
}
  
  
export default Skill;