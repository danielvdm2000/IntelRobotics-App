import React from 'react';
import ContentContainer from '../ContentContainer';
import Footer from '../Footer';

interface Props {
    title: string;
}

const BasePage: React.FC<Props> = ({ title, children }) => (
    <ContentContainer>
        <article style={{ minHeight: 'calc(100vh - 70px)' }}>
            <h1>{title}</h1>
            {children}
        </article>
        <Footer />
    </ContentContainer>
);

export default BasePage;