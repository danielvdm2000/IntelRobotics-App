import React from 'react';

interface Props {
    name: string;
    description: string;
}

const ProductPage: React.FC<Props> = ({ name, description }) => (
    <article>
        <h1>{name}</h1>
        {description}
    </article>
);

export default ProductPage;