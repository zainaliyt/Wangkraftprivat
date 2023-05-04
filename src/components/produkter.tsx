import React from 'react';
import { Container, Row, Col, Form, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Image from 'next/image';

function ProdukterSection() {


  return (
    <section className="produkter">
      <Container>
        <Row>
          <Col className='text-start'>
            <h2 className="text-white">Högkvalitativa produkter</h2>
            <p className="text-white-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-start">
          <Col xs={4} className="pr-0">
            <Button variant="primary" className="btn w-100">
              Solpaneler
            </Button>
          </Col>
          <Col xs={4} className="pr-0 pl-1">
            <Button variant="primary" className="w-100">
              Batterier
            </Button>
          </Col>
          <Col xs={4} className="pl-1">
            <Button variant="primary" className="btn w-100">
              Laddboxar
            </Button>
          </Col>
        </Row>
        <Row className="flex-md-row pt-2">
          <Col>
            <Row className="flex-md-row">
              <Col>
                <Row >
                  <Col className='text-white'>
                    <h3>Specifications</h3>
                    <ListGroup className='bullet-list'>
                      <ListGroup.Item className='bullet-item'>Lorem ipsum dolor sit amet.</ListGroup.Item>
                      <ListGroup.Item className='bullet-item'>Lorem ipsum dolor sit amet.</ListGroup.Item>
                      <ListGroup.Item className='bullet-item'>Lorem ipsum dolor sit amet.</ListGroup.Item>
                      <ListGroup.Item className='bullet-item'>Lorem ipsum dolor sit amet.</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Image src={"/images/produkter.png"} alt="imesg" width={500} height={500} className="full-size" />

              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
      <style jsx>{`
.produkter {
  padding-top: 10%;
  min-height: 100vh;
  background-color:#C2C5BC;
}

.bullet-list {
  list-style: none;
  padding-left: 0;
}

.bullet-item::before {
  content:"\u2219";
  color: black!important;
  margin-right: 5px;
}


.btn {
  font-size:16px;
  line-height:50px;
}

.form-label {
  padding-top: 20px;
}


h1 {
  font-size: 24px;
}

h2 {
  font-size: 24px;
}

h3 {
  font-size: 16px;
  font-weight:bold;
}


`}</style>

    </section>
  );
}

export default ProdukterSection;