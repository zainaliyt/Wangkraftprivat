import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';


const Footer = () => {
    return (
        <footer className="text-white py-5 d-flex align-items-center footer" style={{ background: 'radial-gradient(209.06% 209.06% at 22.22% -109.06%, #A9B489 0%, #5E7153 39.21%, #1F2D16 92.26%)' }}>
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
                <Row className="mt-4 my-md-5 pb-3">
                    <Col md={3} sm={6} xs={6} className="text-center text-md-start text-sm-start mb-4 mb-md-0">
                        <h5 className="mb-3">Tjänster & Produkter</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#">Solceller</a></li>
                            <li><a href="#">Batterier</a></li>
                            <li><a href="#">Laddboxar</a></li>
                        </ul>
                    </Col>
                    <Col md={3} sm={6} xs={6} className="text-center text-md-center text-sm-end mb-4 mb-md-0">
                        <h5 className="mb-3">Länkar</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#">Solcellskalylator</a></li>
                            <li><a href="#">Om oss</a></li>
                            <li><a href="#">Karriär</a></li>
                            <li><a href="#">Tips</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Integritets policy</a></li>
                            <li><a href="#">Cookies</a></li>
                            <li><a href="#">Terms of use</a></li>
                        </ul>
                    </Col>
                    <Col md={3} sm={6} xs={6} className="text-center text-md-center text-sm-start mb-4 mb-md-0">
                        <h5 className="mb-3">Kundservice</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#">Tel: 07X XXX XX XX</a></li>
                            <li><a href="#">E-post: exempel@gmail.com</a></li>
                            <li><a href="#">Vi är tillgängliga...</a></li>
                        </ul>
                    </Col>
                    <Col md={3} sm={6} xs={6} className="text-center text-md-end text-sm-end mb-4 mb-md-0">
                        <h5 className="mb-3">Följ oss</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </Col>
                </Row>
                <div className="my-4 py-2 border-top border-light"></div>

                <Row className="my-4 justify-content-between">
                    <Col className="text-center text-md-start text-sm-center">
                        <ul className="list-unstyled d-flex justify-content-between mb-0" style={{ maxWidth: '90px' }}>
                            <li><Facebook size={20} /></li>
                            <li><Instagram size={20} /></li>
                            <li><Linkedin size={20} /></li>
                        </ul>
                    </Col>

                    <Col className="text-center mb-md-0" md={6} xs={12}>
                        <p className="mb-3 mb-md-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Col>
                    <Col className="text-center text-md-end text-sm-center" >
                        <img src="/images/certificat.jpg" alt="Image" className="mb-4" />
                    </Col>
                </Row>


            </Container>
            <style jsx>{`
li{
    margin-bottom:10px;z
}
.footer {
    min-height: 700px;
    position: relative;
  }


        a {
            color: white;
            text-decoration: none;
          }
          
          a:hover {
            color: white;
            text-decoration: none;
          }

          h5{
            font-size:16px; 
        }
          @media (max-width: 575.98px) {
            p{
             font-size:12px;
            }
            h5{
                font-size:12px; 
            }
            a{
                font-size:12px;
            }
            li{
                margin-bottom:6px;
            }
           }
         
           
         @media only screen and (max-width: 768px) {
         
             p {
               font-size: 12px;
             }
             h5{
                font-size:14px; 
            }
            a{
                font-size:12px;
            }
            li{
                margin-bottom:8px;
            }
           }
           
      `}</style>
        </footer>
    );
};

export default Footer;
