import type { NextPage } from 'next'
import Link from 'next/link';
import ContentContainer from '../components/ContentContainer';
import { getStrapiMedia } from '../lib/client/strapi';

const Home: NextPage = () => {
  return (
    <div style={{
      width: '100%',
      height: 'calc(100vh - 70px)',
      position: 'relative',
    }}>
      <video
        src={getStrapiMedia('/6451475e020dc70f3d11a31447f4d038.mp4')}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        autoPlay
        muted
        loop
      />
      <div style={{
        position: 'absolute',
        left: 0,
        top: '50%',
        width: '100%',
        transform: 'translateY(-50%)',
      }}>
        <ContentContainer style={{ color: '#fff' }}>
          <h1>IntelRobotics</h1>
          <h2>More than just robots</h2>
          <span style={{ textDecoration: 'underline' }}>
            <Link href="/products">View Products</Link>
          </span>
        </ContentContainer>
      </div>
    </div>
  )
}

export default Home
