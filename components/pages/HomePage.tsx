import React from 'react';
import Link from '../../bindings/Link';
import ContentContainer from '../ContentContainer';

interface Props {
    title: string;
    slogan: string;
    backgroundVideo: string;
}

const HomePage: React.FC<Props> = props => (
    <>
        <div style={{
            width: '100%',
            height: 'calc(100vh - 70px)',
            position: 'relative',
        }}>
            <video
                src={props.backgroundVideo}
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
                    <h1>{props.title}</h1>
                    <h2>{props.slogan}</h2>
                    <Link href="/products">
                        <a style={{ color: '#fff' }}>View Products</a>
                    </Link>
                </ContentContainer>
            </div>
        </div>
    </>
);

export default HomePage;