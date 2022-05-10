import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";



export default function NavC() {


  return (


    <Navbar  expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>





  )
}
