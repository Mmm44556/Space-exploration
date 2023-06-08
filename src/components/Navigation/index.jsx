import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BsInstagram, BsFacebook, BsMailbox } from "react-icons/bs";

export default function Navs() {
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className='Nav ms-5'>
      <Container>
        <NavLink href="/portfolio">

          {/* <Navbar.Brand >
            <img

              alt="no"
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand> */}
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>

          <Nav>
            <Nav.Link href="#Instagram">
              < BsInstagram />
            </Nav.Link>
            <Nav.Link href="#Facebook">
              <BsFacebook />
            </Nav.Link>
            <Nav.Link href="#Mail">
              < BsMailbox />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>


  );
}
