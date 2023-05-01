import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';


const Footer = () => {
    return (
        <footer className="text-white py-5 d-flex align-items-center" style={{ background: 'radial-gradient(209.06% 209.06% at 22.22% -109.06%, #A9B489 0%, #5E7153 39.21%, #1F2D16 92.26%)', height: '700px' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={4}>
                        <img
                            src='/images/WANGKRAFTW.png'
                            width="99"
                            height="99"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Col>

                </Row>
                <Row className="mt-4 my-md-5 pb-5">
                    <Col md={3} className="text-start">
                        <h5 className="mb-3">Tjänster & Produkter</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#">Sub-Menu Item 1</a></li>
                            <li><a href="#">Sub-Menu Item 2</a></li>
                            <li><a href="#">Sub-Menu Item 3</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="text-center">
                        <h5 className="mb-3">Länkar</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#">Sub-Menu Item 1</a></li>
                            <li><a href="#">Sub-Menu Item 2</a></li>
                            <li><a href="#">Sub-Menu Item 3</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="text-center">
                        <h5 className="mb-3">Kundservice</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#">Sub-Menu Item 1</a></li>
                            <li><a href="#">Sub-Menu Item 2</a></li>
                            <li><a href="#">Sub-Menu Item 3</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="text-end">
                        <h5 className="mb-3">Följ oss</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#">Sub-Menu Item 1</a></li>
                            <li><a href="#">Sub-Menu Item 2</a></li>
                            <li><a href="#">Sub-Menu Item 3</a></li>
                        </ul>
                    </Col>
                </Row>
                <div className="my-4 py-2 border-top border-light"></div>

                <Row className="my-4 justify-content-between">
                    <Col className="text-start">
                        <ul className="list-unstyled d-flex justify-content-between mb-0" style={{ maxWidth: '90px' }}>
                            <li><Facebook size={20} /></li>
                            <li><Instagram size={20} /></li>
                            <li><Linkedin size={20} /></li>
                        </ul>
                    </Col>

                    <Col className="text-center" xs={6}>
                        <p className="mb-3 mb-md-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                    <Col className="text-end">
                        <img src="/images/certificat.jpg" alt="Image" className="mb-4" />
                    </Col>
                </Row>


            </Container>
            <style jsx>{`
        a {
            color: white;
            text-decoration: none;
          }
          
          a:hover {
            color: white;
            text-decoration: none;
          }
      `}</style>
        </footer>
    );
};

export default Footer;
