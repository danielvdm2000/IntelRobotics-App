import React from 'react';
import ContentContainer from '../ContentContainer';

interface Props {
    title: string;
}

const BasePage: React.FC<Props> = ({ title, children }) => (
    <ContentContainer>
        <article>
            <h1>{title}</h1>
            {children}
        </article>
    </ContentContainer>
);

export default BasePage;