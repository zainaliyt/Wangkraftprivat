import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactSection() {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {  /** Funktion för kontakt form  */
    event.preventDefault();
    const form = event.currentTarget;
    console.log({
      lan: form.lan.value,
      name: form.nameInput.value,
      phone: form.phoneNumber.value,
      email: form.email.value,
    });
  }
  
  

  return (
    <section className="contact">
      <Container>
        <Row className="flex-md-row">
          <Col md={5} lg={5} mb={5}>
            <h2 className="text-white mb-4">Enkel och smidig bokning</h2>
            <p className="text-white-50 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam,
              quam vel tincidunt bibendum, nisl dui pulvinar massa, sit amet ultricies
              ligula lacus ut turpis. Proin nec maximus tellus.
            </p>
          </Col>
          <Col md={7} lg={5} xl={4} className="ms-auto">
            <div className="bg-white p-4 rounded-10 contactForm">
              <h1 className="text-black mb-4">Bli kontaktad av oss</h1>
              <Form>
                <Form.Group className="mb-3 black pt-4">
                  <Form.Label className="text-black fw-bold">Län</Form.Label>
                  <Form.Control as="select" name="lan" id="lan-select">
                    <option value="Västra Götalands län">Västra Götalands län</option>
                    <option value="Uppsala län">Uppsala län</option>
                    <option value="Skåne län">Skåne län</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-black fw-bold">Namn</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Ange ditt namn" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-black fw-bold">Telefonnummer</Form.Label>
                  <Form.Control type="text" name="phoneNumber" placeholder="Ange ditt telefonnummer" />
                </Form.Group>
                <Form.Group className="mb-3 pb-4">
                  <Form.Label className="text-black fw-bold">E-post</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Ange din e-post" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">Skicka in intresseformulär</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>{`

.contact {
  padding-top: 10%;
  min-height: 100vh;
  background-size: cover;
  background-position: center center;
  position: relative;
  background-image: url('/images/contactBG.png');
}


.btn {
  line-height: 10px;
}

.form-label {
  padding-top: 20px;
}

.contactForm {
  margin-bottom:40px;
  border-radius: 10px;
  padding: 40px 40px !important;
}

.form-control {
  border: 2px solid black;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

h1 {
  font-size: 24px;
}

h2 {
  font-size: 24px;
}

p {
  color: black;
  max-width: 716px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 1200px) {
  h1 {
    font-size: 18px;
  }
  h2 {
    font-size: 18px;
  }
  p {
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
  }
  .contactForm {
    padding: 30px;
  }
}

@media only screen and (max-width: 992px) {
  .btn {
    font-size: 14px;
  }
  .contactForm {
    padding: 50px;
  }
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 16px;
  }
  h2 {
    font-size: 14px;
  }
  p {
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
  }
}

@media (max-width: 575.98px) {
  h1 {
    font-size: 12px;
  }
  h2 {
    font-size: 18px;
  }
  p {
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
  }

  .contactForm {
    padding: 30px;
  }
}

`}</style>

    </section>
  );
}

export default ContactSection;