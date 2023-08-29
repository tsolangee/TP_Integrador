import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Institucional } from '../Institucional/Institucional';
import { Contacto } from '../Contacto/Contacto';
import { Inicio } from '../inicio/inicio';

export function Header() {
  return (
    <BrowserRouter>
    <>
      <Navbar collapseOnSelect expand='lg' bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            Inicio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='control'/>
          <Navbar.Collapse id='control'>
            <Nav className="me-auto">            
              <Nav.Link as={Link} to='/Institucional'>Institucional</Nav.Link>
              <Nav.Link as={Link} to='/Contacto'>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    <Routes>
      <Route path='Institucional' element={<Institucional/>}></Route>
      <Route path='Contacto' element={<Contacto/>}></Route>
      <Route path='/' element={<Inicio/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

  