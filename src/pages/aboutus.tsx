import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NextPage } from 'next';
import Head from 'next/head';
import Navigation from '../components/header';
import ImageTextSection from '../components/imageText';

const AboutUs: NextPage = () => {
    return (
        <>
            <Head>
                <title>Om oss | Wängkraft</title>
                <meta name="description" content="Learn more about our company and our team members." />
            </Head>
            <Navigation coloredNavbar={true}></Navigation>

            <div className="hero-section"></div>

            <div className="d-flex align-items-center justify-content-center lead">
                <Container className="text-center text-white" style={{ zIndex: '1' }}>
                    <h1 className="fw-bold mb-4">Om oss</h1>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Container>
            </div>
            <ImageTextSection
                imageUrl="/images/aucard.jpg"
                imageAlt="Description of the image"
                title="Lorum ipsum"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ex eget mauris bibendum blandit in nec lorem. In semper blandit leo, eu interdum est vestibulum eget."
            />
            <Container style={{ marginTop: '3rem' }}>
                <Row className="mb-5">
                    <Col md={6}>
                        <h3>Our Mission</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris eu risus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris eu risus.</p>
                    </Col>
                    <Col md={6}>
                        <h3>Our Vision</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris eu risus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris eu risus.</p>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className="text-center mb-5"><h2>Our Team</h2></Col>
                </Row>

                <Row className="mb-5">
                    <Col md={4}>
                        <div className="team-member">
                            <img src="https://via.placeholder.com/150" alt="John Doe" className="img-fluid rounded-circle mb-3" />
                            <h4>John Doe</h4>
                            <p className="text-muted">CEO</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris eu risus.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="team-member">
                            <img src="https://via.placeholder.com/150" alt="Jane Doe" className="img-fluid rounded-circle mb-3" />
                            <h4>Jane Doe</h4>
                            <p className="text-muted">COO</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris eu risus.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="team-member">
                            <img src="https://via.placeholder.com/150" alt="Bob Smith" className="img-fluid rounded-circle mb-3" />
                            <h4>Bob Smith</h4>
                            <p className="text-muted">CTO</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt mauris eu risus.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
       
        .lead {
            padding:5%;
           }
           h1 {
             font-size: 48px;
             color:black;
           }
           .lead p{
               color: rgba(22, 21, 20, 0.7);
           }
        .hero-section {
          padding-top: 10%;
          min-height: 70vh;
          background-size: cover;
          background-position: center center;
          background-image:url(/images/aboutus.jpg);
          position: relative;
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
        </>
    );
};

export default AboutUs;
