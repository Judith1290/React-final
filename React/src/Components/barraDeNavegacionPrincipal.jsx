// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo.png'

function NavBar() {
  return (
    <Navbar expand="lg" className='header'>

      <Container fluid>
        <div className='tituloMG' ><Navbar.Brand href="#">MG TECHNOLOGY</Navbar.Brand></div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <img
              // https://iconos8.es/icons/set/reina
              // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADRElEQVR4nO2bMWsUURSFb2HeU2KrTSyN2FjpL9BfoOklNrb6D0xppQjCrAuxsJN124BE2PciWsTORvQXRFBQEbU7Msk6cXdmltndmXcfM+eD06SYd+85O3cfuYkIIYQQQgghhBBCCCGEEEIIIYQQEhHoyzn0ZIBEfow1RCLr2nV1x/xEvqInmFD6s0TWtOtrPUg/+dPmH+u5dn2tB+nIKQsgkW/a9bUe9OQ7A9AMIJHhjBE0kDYS060DfbmAnnwp/BJ+LOdb50+Mtw4kspZ+4Y7HUaqBqvlN+hPzrQPebsHb+6o1NO1PrLcOHJmPsdRCaNyfGG8dmDRfNYTG/Ynt1oFi89VCaNyfmG4dmG2+SghB/Inh1oFq5uuEoOEPvOnjpaw2eshi5gcNAW/lFLx9FOKsyYOd+QxvP8CtXIrQfIQIASNzEd6+hzcHTZ5TfLi3nw6bdPYXnL0dofloMgS4kzfh7c+xBx+bOGN2Ad6+m2zUPKtzJKEe82sP4WjkmCdTz9+v6/nVC3HmVUGjtYwk1Gt+bSEcj5zpZ5vdZZ89fzHeDgsbXXIkoRnzlw5hYuTke34hoYE3T2c3O/9IQrPmLxRCyciZ7nVbQgNnH1ZotvJIQhjz5wqhfOTk3oAHEprKhlUYSQhrfqUQZo6cXI/mnoQG3tydr+HikQQd80tDqDZycgHcCWZ8VujI3lqg4YmRBF3zcyFUHjl5bYYPwJuNBRtOX+vNSMzHWFvjmqqNnJzMRvgA9uy1CIxDJLoaPoDRiSsRNI4o9HrlcvgAnFlXb9xHopEN/wcBeLN6Vr1xH4n2Tp8JH8COWPXGfSTaERs8gMMQvP2j3rxX128V8/9byqDbMgd6AfxbynRZTmEZU76U6aT29QIoXsp0TGZXL4CypUyX5BSWMdWXMl2Q2dYLoNpSpt1yCsuYLIC4fqMJnQAUljGLL2VaKKewjFlyKdM2beoF4MyNCAyA8htwXS8ALmWgsozJAuBSBirLmCwALmWgsozJAuBSBirLmCwALmWgtozJQij/B7VOSLTRNgAMQN8E8A3QNwJK0p5AHEHaaH8CwTdA3wRwBOkbASVpTyBCCCGEEEIIIYQQQgghhBBCCCESLX8BN5V2Un1544AAAAAASUVORK5CYII="
              src= {Logo}
              alt="Logo"
              className="navbar-logo"
              style={{ width: '75px', height: '70px' }} // Ajusta el tamaño de la imagen según tus necesidades
            />
            <NavDropdown title="Contacto" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Informacion ">CONTACTO</NavDropdown.Item>
              <NavDropdown.Divider />
             
              <NavDropdown.Divider />
             
            </NavDropdown>
         
          </Nav>
          <Form className="d-flex">
          
            <button className='botton' variant="outline-success"><Link to='/Login'>REGISTRO</Link></button>


          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
