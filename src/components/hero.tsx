import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section
      className="hero d-flex flex-column justify-content-center pt-sm-3 py-xs-2 mx-auto"
      style={{ backgroundImage: "url('/images/heroBG.jpg')" }}
    >
      <div className="overlay"></div>
      <Container className="text-center text-lg-start">
        <Row className="align-items-center">
          <Col lg={7} sm={12}>
            <h1 className="display-4 text-white mb-3">
              Välkommen till Wängkraft
            </h1>
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              laoreet mauris id lorem convallis, sed tristique leo tincidunt.
              Fusce vitae sem lacinia, malesuada nunc quis, bibendum sapien.
            </p>
            <Button variant="primary" className="m-2">
              Till solcellskalkylator
            </Button>
            <Button variant="secondary">Se våra produkter</Button>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={4} sm={4} className="mb-4 mb-lg-0 text-center">
            <h2 className="text-white mb-0">XX%</h2>
            <p className="text-white-50">Koldioxidbesparing</p>
          </Col>
          <Col lg={4} sm={4} className="mb-4 mb-lg-0 text-center">
            <h2 className="text-white mb-0">XX%</h2>
            <p className="text-white-50">Antal monterade paneler</p>
          </Col>
          <Col lg={4} sm={4} className="text-center">
            <h2 className="text-white mb-0">XX%</h2>
            <p className="text-white-50">
              Beställda montage kommande 3 mån
            </p>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .lead {
          font-size: 20px;
        }
        h1 {
          font-size: 48px;
        }
        .hero {
          padding-top: 10%;
          min-height: 100vh;
          background-size: cover;
          background-position: center center;
          position: relative;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @media (max-height: 700px) {
          .hero {
            padding-top: 20% !important;
          }
        }

        @media (max-width: 767.98px) {
          .lead {
            font-size: 16px;
          }
          h1 {
            font-size: 38px;
          }
        }

        @media (max-width: 575.98px) {
          .lead {
            font-size: 12px;
          }
          h1 {
            font-size: 24px!important;
          }
          .hero {
            padding-top: 40%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
