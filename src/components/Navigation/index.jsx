import { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdPlanet } from "react-icons/io";
import { BsLinkedin, BsMailbox } from "react-icons/bs";
import { FaGithub, FaRegNewspaper } from "react-icons/fa";
import PubSub from 'pubsub-js';
export default function Navs() {
  const [isActive, setIsActive] = useState(false)
  const [isActive1, setIsActive1] = useState(false)
  //控制footer
  const togglePlanets = () => {
    PubSub.publish('togglePlanets', '')
    setIsActive((v) => !v)

  }
  const toggleNews = () => {
    PubSub.publish('toggleNews', '')
    setIsActive1((v) => !v)

  }

  return (
    <Navbar expand="lg" variant="dark" fixed="top" className='Nav ms-1 '>
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
            <Nav.Link href="#Planets" onClick={togglePlanets} active={isActive}>
              < IoMdPlanet />
            </Nav.Link>
            <Nav.Link href="#News" onClick={toggleNews} active={isActive1} >
              < FaRegNewspaper />
            </Nav.Link>
            <Nav.Link href="#Linkedin">
              < BsLinkedin />
            </Nav.Link>
            <Nav.Link href="https://github.com/Mmm44556" target="_blank">
              <FaGithub />
            </Nav.Link>
            <Nav.Link href="#Mail">
              < BsMailbox />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar >


  );
}
