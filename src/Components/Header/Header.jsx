import React from 'react'
import { Container, Navbar, Offcanvas, Nav, Stack, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
        <Navbar key={false} bg="light" expand={false} className="mb-3">
          <Container>
            <Navbar.Brand to="/"><b>Guzmar Sport</b></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Guzmar Sport
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Stack gap={3}> 
                  <Button variant='light'><Link to={'/'}>Inicio</Link></Button>
                  <Button variant='light'><Link to={'/products'}>Productos</Link></Button>
                  <Button variant='light'><Link to={'/cotizaciones'}>Cotizaciones</Link></Button>
                  <Button variant='light'><Link to={'/baseball'}>Baseball</Link></Button>
                    
                    
                  </Stack>
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
    )
}

export default Header