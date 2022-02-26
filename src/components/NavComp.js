import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavComp = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Navbar bg="primary" variant="dark">
              <Container>
                <Link to="/" style={{textDecoration: 'none', fontSize: 30}}>Navbar</Link>
                <Nav style={{textDecoration: 'none', fontSize: 17}} className="ms-auto">
                  <Link style={{textDecoration: 'none'}} className="mx-2" to="/">Home</Link>
                  <Link style={{textDecoration: 'none'}} className="mx-2" to="/add">Add New</Link>
                </Nav>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavComp;
