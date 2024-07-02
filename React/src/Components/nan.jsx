// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className='header'>
      <Container fluid>
        <Navbar.Brand href="#">MG TECHNOLOGY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            

            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Contacto">CONTACTO</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Administrador">ADMINISTRADOR</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>Link</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button variant="outline-success"><Link to='/TodosLosProductos'>INICIO</Link></button>
            <button variant="outline-success"><Link to='/Login'>REGISTRO</Link></button>


          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
