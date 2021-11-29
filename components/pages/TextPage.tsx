import React from 'react';
import ContentContainer from '../ContentContainer';

export interface TextPageProps {
    title: string;
    content: string;
}

const TextPage: React.FC<TextPageProps> = ({ title, content }) => (
    <ContentContainer>
        <article>
            <h1>{title}</h1>
            {content}
        </article>
    </ContentContainer>
);

export default TextPage;