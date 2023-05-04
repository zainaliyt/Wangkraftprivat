import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const RecensionSection = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center py-5" style={{ backgroundColor: '#F5F5F5' }}>
            <Container>
                <Row className="flex-md-row pb-4">
                    <Col lg={10}>
                        <h2 className="mb-4">Nöjda kunder</h2>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam,
                            quam vel tincidunt bibendum, nisl dui pulvinar massa, sit amet ultricies
                            ligula lacus ut turpis. Proin nec maximus tellus.
                        </p>
                    </Col>
                </Row>


                <Row className="justify-content-center mb-5">
                    <Col md={6} lg={4} className="mb-4 m-4">
                        <Card className="rounded-10 h-100">
                            <div className="d-flex align-items-center h-100">
                                <Card.Img variant="top" src="/images/rec1.jpg" className="w-100" />
                            </div>
                            <Card.Body className="d-flex flex-column justify-content-between p-4">
                                <div>
                                    <Card.Title>Kund #1</Card.Title>
                                    <Card.Text className="card-text-width">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4} className="mb-4 m-4">
                        <Card className="rounded-10 h-100">
                            <div className="d-flex align-items-center h-100">
                                <Card.Img variant="top" src="/images/rec2.jpg" className="w-100" />
                            </div>
                            <Card.Body className="d-flex flex-column justify-content-between p-4">
                                <div>
                                    <Card.Title>Kund #2</Card.Title>
                                    <Card.Text className="card-text-width">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        <Button variant="primary">Se fler kundrecensioner</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RecensionSection;
