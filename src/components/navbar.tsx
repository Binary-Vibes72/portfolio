'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/navbar.css';
import '@/app/globals.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function MyNavbar() {
  return (
    <>
    <div className="">
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} fixed="top" className="shadow-xl font-outfit bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top"
              className="bg-text-primary font-outfit"
            >
              <Offcanvas.Header closeButton className='custom-close-btn'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className=''/>
              </Offcanvas.Header> 
              <Offcanvas.Body >
                <Nav className="justify-content-center flex-grow-1 pe-3 ">
                  <Nav.Link href="#action1" className='hover:text-secondary custom-links text-Primary'>home</Nav.Link>
                  <Nav.Link href="#action2" className='hover:text-secondary custom-links text-Primary'>about me</Nav.Link>
                  <Nav.Link href="#action3" className='hover:text-secondary custom-links text-Primary'>skills</Nav.Link>
                  <Nav.Link href="#action4" className='hover:text-secondary custom-links text-Primary'>work</Nav.Link>
                  <Nav.Link href="#action5" className='hover:text-secondary custom-links text-Primary'>contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
    </>
  );
}

