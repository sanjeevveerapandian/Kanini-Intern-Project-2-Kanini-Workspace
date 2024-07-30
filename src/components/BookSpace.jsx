import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const Bookspace = () => {
  return (
    <Container>
      <h1>Book Space</h1>
      <ul>
        <li>
          <Link to="/bookroom">Book Room</Link>
        </li>
        <li>
          <Link to="/bookdesk">Book Desk</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Bookspace;
