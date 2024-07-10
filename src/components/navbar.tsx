'use client';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/navbar.css';
import '@/app/globals.css';

export default function MyNavbar() {
  return (
    <div className="">
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} fixed="top" className="shadow-xl font-outfit bg-body-tertiary mb-3 ">
          <Container fluid className=''>
            <Navbar.Brand href=""></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='custom-toggle-btn'/>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
              className="bg-Background font-outfit"
            >
              <Offcanvas.Header closeButton className='custom-close-btn'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='' />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 ">
                  <Nav.Link href="#action1" className='hover:text-text-secondary custom-links '>home</Nav.Link>
                  <Nav.Link href="#action2" className='hover:text-text-secondary custom-links '>about me</Nav.Link>
                  <Nav.Link href="#action3" className='hover:text-text-secondary custom-links '>skills</Nav.Link>
                  <Nav.Link href="#action4" className='hover:text-text-secondary custom-links '>work</Nav.Link>
                  <Nav.Link href="#action5" className='hover:text-text-secondary custom-links '>contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

