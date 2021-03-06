import React from 'react';
import ProductSlider from '../ProductSlider';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Image } from '../types';
import BasePage from './BasePage';

interface Props {
    name: string;
    description: string;
    images: Image[];
}

const ProductPage: React.FC<Props> = ({ name, description, images }) => (
    <BasePage title={name}>
        <div style={{ display: 'flex', gap: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 250 }}>
                <ProductSlider images={images} />
            </div>
            <article style={{ flex: 1, minWidth: 250 }}>
                {description}
            </article>
        </div>
    </BasePage>
);

export default ProductPage;