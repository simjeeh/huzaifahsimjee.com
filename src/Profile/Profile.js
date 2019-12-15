import React from 'react';
import './Profile.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import profile from '../img/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

class Profile extends React.Component {
  render() {
    return (
        <div>
            <Container>
              <Row>
                <Col></Col>
                <Col xs={10} md={4}>
                  <Image src={profile} rounded fluid/>
                </Col>
                <Col></Col>
              </Row>
            </Container>
            <br></br>
            <h2 class="title">Huzaifah Simjee</h2>
            <h5 class="description">
                <FontAwesomeIcon icon={faCubes}/>
                &nbsp; Software Engineer &nbsp;
                <FontAwesomeIcon icon={faCubes}/>
            </h5>
            <br></br>
            <Button variant="success" size="lg" target="_blank" href="https://goo.gl/K4WEcs"><FontAwesomeIcon icon={faDownload}/> &nbsp; Resume</Button>
        </div>
    );
  }
}


export default Profile;