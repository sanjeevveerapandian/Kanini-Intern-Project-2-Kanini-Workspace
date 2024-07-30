import React from 'react';
import { Navbar, Nav, Container, Image, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="light" variant="black" expand="lg" className="navbar-custom sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="companyname">
            <img
              src="download.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Company Logo"
            />
         
            Kanini <b>Workspace</b>
          </Navbar.Brand>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-middle">
              <Nav.Link as={Link} to="/" className="nav-item-custom">Home</Nav.Link>
              <NavDropdown title="Book Space" id="basic-nav-dropdown" className="nav-item-custom">
                <NavDropdown.Item as={Link} to="/bookroom">Book Room</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/bookdesk">Book Desk</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-item-custom">My Bookings</Nav.Link>
              <Nav.Link className="nav-item-custom">Events</Nav.Link>
              <Nav.Link className="nav-item-custom">Calendar</Nav.Link>
            </Nav>
            <Nav className="ml-auto nav-right">
              <Nav.Link href="#notifications" className="nav-item-custom">
                <FontAwesomeIcon icon={faBell} />
              </Nav.Link>
              <Nav.Link href="#admin" className="nav-item-admin">
                <Image src="userpic.jpg" roundedCircle width="30" height="30" />
                {' '}
                Tamilselvan Subramaniyan
                
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
