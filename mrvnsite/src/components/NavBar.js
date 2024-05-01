import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import logo from '../assets/MRVN.png';


export const NavBar = () => {
const [activeLink, setActiveLink] = useState("home");
const [scrolled, setScrolled] = useState(false);

useEffect( ()=> {
  const onScroll = () => {
    if(window.scrollY > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  window.addEventListener("scroll", onScroll)

  return () => window.removeEventListener("scroll", onscroll)
}, [])

return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="MRVNJ Logo" height="50" width="50"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <span className='navbar-toggler-icon'></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' } onClick={() => setActiveLink("projects")}>Projects</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink("about")}>
              <NavDropdown.Item href="#bio" className={activeLink === 'bio' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink("Bio")}>
                Bio
              </NavDropdown.Item>
              <NavDropdown.Item href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink("education")}>
                Education
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink("connect")}>Connect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}