import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import './BookDesk.css';

const Bookdesk = () => {
  return (
    <Container className="bookdesk-container">
      <Row>
        <Col md={7}>
          <h1>Book a Desk</h1>
          <p className="light-text">Book a desk for the day to use in the common area of any Kanini location</p>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control as="select">
                    <option>Futura, Pune</option>
                    <option>Kanini, Bangalore</option>
                    <option>Kanini, Chennai</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <div className="add-colleagues-text">
              <i className="fas fa-plus-circle"></i> Add Colleagues
            </div>
            <Button variant="primary" className="book-desk-button mt-3">Book a Desk</Button>
          </Form>
        </Col>
        <Col md={5}>
          <Card className="image-card">
            <Card.Img variant="top" src="pixel.png" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Bookdesk;
