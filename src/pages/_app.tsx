// Bootstrap import
import 'bootstrap/dist/css/bootstrap.css';
// Custom bootstrap
import '../styles/bootstrap/custom.scss';
// Custom styles
import '../styles/index.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
