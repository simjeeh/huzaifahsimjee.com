import React from 'react';
import './Skills.css';
import data from '../data/skills_data.json';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

class Skills extends React.Component {
  fill_three(temp_data){
      const img1 = require('../img/Skills/' + temp_data[0]);
      const img2 = require('../img/Skills/' + temp_data[1]);
      const img3 = require('../img/Skills/' + temp_data[2]);
      return (
          <Row style={{"justify-content": "center", 'height':'125px', 'margin-bottom': '50px'}}>
              <Col xs={6} md={4}>
                  <Image style={{"justify-content": "center", 'height':'125px'}} src={img1} fluid/>
              </Col>
              <Col xs={6} md={4}>
                  <Image style={{"justify-content": "center", 'height':'125px'}} src={img2} fluid/>
              </Col>
              <Col xs={6} md={4}>
                  <Image style={{"justify-content": "center", 'height':'125px'}} src={img3} fluid/>
              </Col>
          </Row>
      )
  }
  fill_two(temp_data){
      const img1 = require('../img/Skills/' + temp_data[0]);
      const img2 = require('../img/Skills/' + temp_data[1]);
      return (
          <Row style={{"justify-content": "center", "display": "flex", 'height':'125px', 'margin-bottom': '50px'}}>
              <Col xs={6} md={4}>
                  <Image style={{"justify-content": "center", 'height':'125px'}} src={img1} fluid/>
              </Col>
              <Col xs={6} md={4}>
                  <Image style={{"justify-content": "center", 'height':'125px'}} src={img2} fluid/>
              </Col>
          </Row>
      )
  }
  fill_one(temp_data){
        const img = require('../img/Skills/' + temp_data[0]);
        return (
            <Row style={{"justify-content": "center", 'height':'125px', 'margin-bottom': '50px'}}>
                <Col xs={6} md={4}>
                    <Image style={{"justify-content": "center", 'height':'125px'}} src={img} fluid/>
                </Col>
            </Row>
        )
    }

  makeGrid(){
    var output = [];
    while(data.length/3 >= 1){
        var three = data.splice(0,3);
        output.push(this.fill_three(three));
    }
    if(data.length === 2) {
        output.push(this.fill_two(data));
    }
    if(data.length === 1){
       output.push(this.fill_one(data));
    }
    return output;
  }

  render() {
    return (
        <div>
            <h1>Skills</h1>
            <br/>
            <Container style={{"justify-content": "center"}}>
                {this.makeGrid()}
            </Container>
        </div>
    );
  }
}

export default Skills;