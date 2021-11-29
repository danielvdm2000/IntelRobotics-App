import React from 'react';

interface Props {
    name: string;
    image: {
        src: string;
        alt: string | undefined;
    } | undefined
}

const ProductPreview: React.FC<Props> = ({ image, name }) => (
    <div style={{
        border: '1px solid rgb(170, 170, 170)',
        backgroundColor: '#ebebeb',
        padding: '10px',
    }}>
        <img 
            src={image?.src} 
            alt={image?.alt ?? 'No alternative text'} 
            style={{
                display: 'block',
                width: '200px',
                height: '200px',
                objectFit: 'contain',
                paddingBottom: '10px',
            }} 
        />
        <strong>{name}</strong>
    </div>
);

export default ProductPreview;