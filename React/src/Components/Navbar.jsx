import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarPri({ onSearch, onSelectCategory }) {
    const handleSearchChange = (event) => {
        console.log(handleSearchChange)
        onSearch(event.target.value);
    };

    const handleSelectCategory = (category) => {
        console.log(handleSelectCategory)
        onSelectCategory(category);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">MG TECHNOLY</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavDropdown title="Todo" id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={() => handleSelectCategory('Cargadores')}>Cargadores</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => handleSelectCategory('Cables USB')}>Cables USB</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => handleSelectCategory('Cubo')}>Cubo</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => handleSelectCategory('Temperados')}>Temperados</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => handleSelectCategory('AROS DE LUZ')}>AROS DE LUZ</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => handleSelectCategory('Audifono')}>Audifono</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => handleSelectCategory('Celulares')}>Celulares</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleSearchChange}
                        />
                        <Button variant="outline-success">Buscar</Button>
                    </Form>
                    <Button variant="outline-success"><Link to='/'>Regresar</Link></Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarPri;
