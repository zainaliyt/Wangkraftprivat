import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BenefitsSection = () => {
  return (
    <div className="bg-gradient py-5 d-flex align-items-center" style={{ minHeight: '700px' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={4} md={6} sm={12} className="mb-5 justify-content-center">
            <img src="/images/s1.png" alt="Image 1" className="mx-auto d-block mb-4" style={{ height: '80px', width: '80px' }} />
            <h1>Höjer husets värde</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-5 justify-content-center">
            <img src="/images/s2.png" alt="Image 2" className="mx-auto d-block mb-4" style={{ height: '80px', width: '80px' }} />
            <h1>Marknadens bästa produkter</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-5 justify-content-center">
            <img src="/images/s3.png" alt="Image 3" className="mx-auto d-block mb-4" style={{ height: '80px', width: '80px' }} />
            <h1>Unik sälj punkt</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
      .text-center {
        display: flex;
        justify-content: center;
      }
        h1 {
          font-weight: 700;
          font-size: 24px;
          white-space: nowrap;
        }
        p {
          color:black;
          font-size: 16px;
          font-weight: 400;
        }
        .bg-gradient {
          background: linear-gradient(115.81deg, #FDF1BD -61.03%, #D9881E 86.43%)!important;
        }

        @media (max-width: 768px) {
          .bg-gradient {
            min-height: auto!important;
          }
          h1 {
            font-size: 20px;
          }
          p {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default BenefitsSection;
