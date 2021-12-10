import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ContentContainer style={{
        maxWidth: '1080px',
        margin: 'auto',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Header name="IntelRoboics">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/offices">Offices</Link>
        </Header>
      </ContentContainer>
      <Component {...pageProps} />
    </div >
  );
}

export default MyApp
