import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
  render() {
    return (
        <Navbar bg="info" expand="lg" sticky="top">
        <Navbar.Brand><FontAwesomeIcon icon={faCircleNotch} className="rotate"/>&nbsp; Huzaifah Simjee</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link target="_blank" href="https://goo.gl/K4WEcs" style={{"color":"black"}}>Resume</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default Header;