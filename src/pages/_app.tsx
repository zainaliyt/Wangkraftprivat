import 'bootstrap/dist/css/bootstrap.css';
import '../styles/bootstrap/custom.scss';
import '../styles/index.css';
import type { AppProps } from 'next/app';
import GlobalLayout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
