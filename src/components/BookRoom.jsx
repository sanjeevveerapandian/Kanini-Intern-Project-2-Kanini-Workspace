
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import './BookRoom.css';
import { setLocation, setDate, setEmployees, setFilteredRooms, setSearchClicked } from './BookroomSlice';

const Bookroom = () => {
  const dispatch = useDispatch();
  const { location, date, employees, filteredRooms, searchClicked } = useSelector((state) => state.bookroom);

  const rooms = [
    { name: 'Conference Room 1', employees: 8, img: 'Img (1).png' },
    { name: 'Conference Room 2', employees: 16, img: 'Img.png'},
    { name: 'Conference Room 3', employees: 20, img: 'img4.jpg' },
    { name: 'Conference Room 4', employees: 8, img: 'image.jpg' },  
    { name: 'Conference Room 5', employees: 16, img: 'img4.jpg' },
    { name: 'Conference Room 6', employees: 20, img: 'image.jpg' },
    { name: 'Conference Room 7', employees: 8, img: 'Img (1).png' },
    { name: 'Conference Room 8', employees: 16, img: 'img4.jpg' },
  ];

  const handleEmployeeChange = (e) => {
    dispatch(setEmployees(parseInt(e.target.value)));
  };

  const handleSearchClick = () => {
    dispatch(setSearchClicked(true));
    const filtered = employees
      ? rooms.filter(room => room.employees === employees)
      : [];
    dispatch(setFilteredRooms(filtered));
  };

  return (
    <Container className="bookroom-container roo">
      <h1 >Book a Room</h1>
      <p className="light-text">Book a conference room at any Kanini location</p>
      <Form>
        <Row className="mb-3 align-items-end">
          <Col md={3}>
            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                as="select"
                value={location}
                onChange={(e) => dispatch(setLocation(e.target.value))}
              >
                <option>Futura, Pune</option>
                <option>Kanini, Bangalore</option>
                <option>Kanini, Chennai</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => dispatch(setDate(e.target.value))}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="formEmployees">
              <Form.Label>Employees</Form.Label>
              <Form.Control as="select" onChange={handleEmployeeChange}>
                <option value="">Select</option>
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="20">20</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={3} className="d-flex align-items-end">
            <Button variant="primary" className="search-button" onClick={handleSearchClick}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      {searchClicked && (
        <>
          <Row>
            {filteredRooms.slice(0, 4).map((room, index) => (
              <Col md={3} key={index} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={room.img} />
                  <Card.Body>
                    <Card.Title>{room.name}</Card.Title>
                    <Card.Text>Employees: {room.employees}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            {filteredRooms.slice(4, 8).map((room, index) => (
              <Col md={3} key={index} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={room.img} />
                  <Card.Body>
                    <Card.Title>{room.name}</Card.Title>
                    <Card.Text>Employees: {room.employees}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Bookroom;
