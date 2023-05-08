import { Container, Row, Col } from 'react-bootstrap';

type Props = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  text: string;
};

function ImageTextSection({ imageUrl, imageAlt, title, text }: Props) {
  return (
    <section className="bg-light" style={{ height: '100%' }}>
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className='p-0'>
            <img
              src={imageUrl}
              alt={imageAlt}
              className="img-fluid w-100"
            />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div className='px-5'>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ImageTextSection;
