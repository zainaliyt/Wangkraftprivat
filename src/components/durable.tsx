import { Container } from 'react-bootstrap';
import Image from 'next/image';

function DurableSection() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: "700px", backgroundImage: "url('/images/durable.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <Container className="text-center text-white" style={{ zIndex: '1' }}>
        <h1 className="fw-bold mb-4">Mot en hållbar framtid</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </Container>
      <style jsx>{`
        h1, p {
          color: #fff;
        }

        h1 {
          font-size: 36px;
          font-weight: 400;
          margin-bottom: 2rem;
        }

        p {
          max-width: 716px;
          font-size: 20px;
          font-weight: 400;
          margin-bottom: 2rem;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 24px;
          }

          p {
            font-size: 16px;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 20px;
          }

          p {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}

export default DurableSection;
