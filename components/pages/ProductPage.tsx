import React from 'react';
import ProductSlider from '../ProductSlider';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Image } from '../types';

interface Props {
    name: string;
    description: string;
    images: Image[];
}

const ProductPage: React.FC<Props> = ({ name, description, images }) => (
    <div>
        <h1>{name}</h1>
        <div style={{ display: 'felx', flexDirection: 'row' }}>
            <ProductSlider images={images} />
            <article>
                {description}
            </article>
        </div>
    </div>
);

export default ProductPage;