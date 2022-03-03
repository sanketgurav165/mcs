import React from 'react';
import logo2 from "../../img/logo2.png";
import { Navbar, Nav, Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes} 
        from "react-router-dom";
import "./navigation.css";
import Contact from "../contact/Contact";
import Intro from "../intro/Intro";
import ProjectList from "../projectList/ProjectList";



const Navigation = () => {
  return (
    <>
     <Router>
    <Navbar bg="dark" variant="dark" >
      <Container>
      <Navbar.Brand as={Link} to={"/"}>
      <img
        src={logo2}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
        <Nav.Link as={Link} to={"/projects"}>Projects</Nav.Link>
        <Nav.Link as={Link} to={"/contact"}>Contact Us</Nav.Link>
      </Nav>
      </Container>
    </Navbar>

    <Routes>
        <Route exact path="/" element={<Intro/>}/>
        <Route exact path="/projects" element={<ProjectList/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      
       
        </Routes>
    </Router>
  </>
  )
}

export default Navigation