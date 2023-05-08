import { useEffect, useState } from 'react';
import { Navbar, Container, NavDropdown, Button, Nav } from 'react-bootstrap';

interface NavigationProps {
  coloredNavbar?: boolean;
}

function Navigation({ coloredNavbar = false }: NavigationProps) {
  const [navbarBackground, setNavbarBackground] = useState(
    coloredNavbar ? 'dark' : 'transparent'
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 80 || isMobileMenuOpen) {
        setNavbarBackground('dark');
      } else {
        setNavbarBackground(coloredNavbar ? 'dark' : 'transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [coloredNavbar, isMobileMenuOpen]);

  return (
    <Navbar
      variant={navbarBackground === 'dark' ? 'light' : 'dark'}
      expand="md"
      className={
        navbarBackground === 'dark'
          ? 'bg-change fixed-top'
          : 'fixed-top'
      }
      collapseOnSelect={true}
      onToggle={(expanded) => setIsMobileMenuOpen(expanded)}
      bg={isMobileMenuOpen ? 'change bg-dark' : ''}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={navbarBackground=='dark' ? '/images/WANGKRAFT.png' : '/images/WANGKRAFTW.png'}
            width="99"
            height="99"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-primary" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="mx-auto">
            <NavDropdown
              title="Våra produkter"
              id="navbarDropdownMenuLink1"
              className={`me-md-3 ${
                isMobileMenuOpen ? 'text-change' : ''
              }`}
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="/aboutus"
              className={`me-md-3 ${
                isMobileMenuOpen ? 'text-change' : ''
              }`}
            >
              Om oss
            </Nav.Link>

            <NavDropdown
              title="Kontakt"
              id="navbarDropdownMenuLink3"
              className={`${isMobileMenuOpen ? 'text-change' : ''}`}
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button
            variant={'primary'}
            className="btn-sm px-3"
          >
            Call to action
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
