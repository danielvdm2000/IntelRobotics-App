import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{
      padding: 20,
      maxWidth: 1080,
      margin: 'auto',
    }}>
      <Header name="IntelRoboics">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
      </Header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
