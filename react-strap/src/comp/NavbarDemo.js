import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class NavbarDemo extends React.Component{
	render()
  {
		return(   
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem active="true" eventKey={1} href="#">
              <a ComponentClass="active" href="#">Home</a>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <a href="#">About</a>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <a href="#">Contact</a>
            </NavItem>
          </Nav>
       </Navbar>
    );
	}
}

export default NavbarDemo;