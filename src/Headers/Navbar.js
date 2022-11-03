import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

import "./Navbar.css";

function NavScroll() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid className="Container">
        <Navbar.Brand href="#">
          <img src={require("./logo-white.png")} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Create proposal</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              background-color="black"
            />
            <button className="fa fa-search btn btn-dark "></button>
          </Form>
          <div className="icon-box">
            <button
              className="connectBtn btn btn-small btn-secondary"
              type="button"
            >
              <span>Wallet connect</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;