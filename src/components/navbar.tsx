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
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='custom-toggle-btn' />

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
                <Nav className="justify-center flex-grow-1">
                  <Nav.Link href="#Home" className='hover:text-text-secondary text-text-primary custom-links px-4'>home</Nav.Link>
                  <Nav.Link href="#About" className='hover:text-text-secondary text-text-primary custom-links px-4'>about me</Nav.Link>
                  <Nav.Link href="#Projects" className='hover:text-text-secondary text-text-primary custom-links px-4'>work</Nav.Link>
                  <Nav.Link href="#Skills" className='hover:text-text-secondary text-text-primary custom-links px-4'>skills</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

