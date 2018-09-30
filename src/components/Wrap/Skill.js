import React, { Component } from 'react';
import { Progress } from 'reactstrap';
  
class Skill extends Component {
  render() {
    return (
      <div className="row">
        <div className="offset-md-2">

        </div>
        <div className="col-md-8">
          <div>
          <Progress animated value={2 * 5} >HTML</Progress>
          <Progress animated color="success" value="25" >JavaScript 25%</Progress>
          <Progress animated color="info" value={50} >Python</Progress>
          <Progress animated color="warning" value={75} >CSS</Progress>
          <Progress animated color="danger" value="100" >Tin học văn phòng</Progress>
          </div>
        </div>
      </div>
    );
  }
}
  
  
export default Skill;