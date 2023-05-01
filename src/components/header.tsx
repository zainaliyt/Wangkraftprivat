import { useEffect, useState } from 'react';
import { Navbar, Container, NavDropdown, Button, Nav } from 'react-bootstrap';

function Navigation() {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0 || isMobileMenuOpen) {
        setNavbarBackground('dark');
      } else {
        setNavbarBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <Navbar
  variant={navbarBackground === 'dark' ? 'light' : 'dark'}
  expand="lg"
  className={
    navbarBackground === 'dark' ? 'bg-change fixed-top' : 'fixed-top'
  }
  collapseOnSelect={true}
  onToggle={(expanded) => setIsMobileMenuOpen(expanded)}
  bg={isMobileMenuOpen ? 'change bg-dark' : ''}
>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={'/images/WANGKRAFTW.png'}
            width="99"
            height="99"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-primary" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="mx-auto">
            <NavDropdown title="Våra produkter" id="navbarDropdownMenuLink1" className={`${isMobileMenuOpen ? 'text-change' : ''}`}>
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Om oss" id="navbarDropdownMenuLink2" className={`ms-3 me-3 ${isMobileMenuOpen ? 'text-change' : ''}`}>
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Kontakt" id="navbarDropdownMenuLink3" className={`${isMobileMenuOpen ? 'text-change' : ''}`}>
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant={navbarBackground === 'dark' ? 'secondary' : 'primary'}>Call to action</Button>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default Navigation;
