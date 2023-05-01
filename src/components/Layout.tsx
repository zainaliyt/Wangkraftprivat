import { ReactNode } from 'react';
import Navigation from './header';
import Footer from './footer';

interface Props {
  children: ReactNode;
}

const GlobalLayout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default GlobalLayout;

