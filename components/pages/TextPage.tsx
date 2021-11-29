import React from 'react';

export interface TextPageProps {
    title: string;
    content: string;
}

const TextPage: React.FC<TextPageProps> = ({ title, content }) => (
    <article>
        <h1>{title}</h1>
        {content}
    </article>
);

export default TextPage;