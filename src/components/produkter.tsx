import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ProdukterSection() {

  return (
    <section className="produkter">
      <Container>
      <h2 className="text-white mb-4">Produkter Section</h2>
      </Container>
      <style jsx>{`

.produkter {
  min-height: 100vh;
  background-color:#C2C5BC;
  position: relative;
}

`}</style>

    </section>
  );
}

export default ProdukterSection;