import { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoMdPlanet } from "react-icons/io";
import { BsLinkedin, BsMailbox } from "react-icons/bs";
import { FaGithub, FaRegNewspaper } from "react-icons/fa";
import PubSub from 'pubsub-js';
import style from './style.module.css';
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
      <>
        <NavLink href="/portfolio">
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>

          <Nav className={style.navigator}>
            <Nav.Link href="#Planets"
              onClick={togglePlanets} active={isActive}>
              <div >
                < IoMdPlanet />
              </div>
              <div style={{ flex: '1' }}></div>
            </Nav.Link>
            <Nav.Link

              href="#News"
              onClick={toggleNews} active={isActive1} >
              <div>
                < FaRegNewspaper />
              </div>
              <div style={{ flex: '1' }}></div>
            </Nav.Link>
            <Nav.Link

              href="#Linkedin">
              <div >
                < BsLinkedin />
              </div>
              <div style={{ flex: '1' }}></div>
            </Nav.Link>
            <Nav.Link

              href="https://github.com/Mmm44556"
              target="_blank">
              <div >
                <FaGithub />
              </div>
              <div style={{ flex: '1' }}></div>
            </Nav.Link>
            <Nav.Link
              href="#Mail">
              <div >
                < BsMailbox />
              </div>
              <div style={{ flex: '1' }}></div>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>

    </Navbar >


  );
}
