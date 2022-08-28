import React from "react";
import "./NavBar.css";
import {Container ,Navbar ,Nav , NavDropdown }from 'react-bootstrap'

export default function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-evenly p-3 w-100">

              <a href="#home" className="itemNav fw-bolder fs-5
              " >Home</a>
              <a href="#about" className="itemNav fw-bolder fs-5
              " >About</a>
              <a href="#experience" className="itemNav fw-bolder fs-5
              " >Experience</a>
              <a href="#footer" className="itemNav fw-bolder fs-5
              " >Contact</a>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
