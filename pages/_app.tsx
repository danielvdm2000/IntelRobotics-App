import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import NavLink from '../components/NavLink';

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
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/offices">Offices</NavLink>
        </Header>
      </ContentContainer>
      <Component {...pageProps} />
    </div >
  );
}

export default MyApp
