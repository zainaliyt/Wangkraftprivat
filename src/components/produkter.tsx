import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Image from 'next/image';

function ProdukterSection() {

  const [activeButton, setActiveButton] = useState(0);


  const [bulletPoints, setBulletPoints] = useState([
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
  ]);

  const handleButtonClick = (index: any) => {
    setActiveButton(index);
    switch (index) {
      case 0:
        setBulletPoints([
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
        ]);
        break;
      case 1:
        setBulletPoints([
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
        ]);
        break;
      case 2:
        setBulletPoints([
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet.",
        ]);
        break;
      default:
        break;
    }
  };

  return (
    <section className="produkter">
      <Container>
        <Row>
          <Col className='text-start text-center-md'>
            <h2 className="text-black">Högkvalitativa produkter</h2>
            <p className="text-black-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>

        <Button variant={activeButton === 0 ? "secondary" : ""} size="sm" className="my-2" style={{ color: '#D9881E' }} onClick={() => handleButtonClick(0)}>
          Solpaneler
        </Button>
        <Button variant={activeButton === 1 ? "secondary" : ""} size="sm" className="my-2" style={{ color: '#D9881E' }} onClick={() => handleButtonClick(1)}>
          Batterier
        </Button>
        <Button variant={activeButton === 2 ? "secondary" : ""} size="sm" className="my-2" style={{ color: '#D9881E' }} onClick={() => handleButtonClick(2)}>
          Laddboxar
        </Button>


        <Row className="flex-md-row align-items-center">
          <Col xs={12} md={4} className="text-center text-md-start mb-3 text-black">
            <h3>Specifications</h3>
            <ListGroup className="bullet-list">
              {bulletPoints.map((point, index) => (
                <ListGroup.Item key={index} className="bullet-item">
                  {point}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Image src={"/images/produkter.png"} alt="produkter" width={500} height={500} className="img-fluid mx-auto" style={{ objectFit: "cover", height: "100%", width:"100%"}} />
          </Col>
        </Row>






      </Container>
      <style jsx>{`
.produkter {
  padding-top: 8%;
  min-height: 100%;
  position: relative;
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