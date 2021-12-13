import React from 'react';
import Link from 'next/link';
import ProductPreview from '../ProductPreview';
import { Image } from '../types';
import ContentContainer from '../ContentContainer';

export interface Product {
    id: string;
    name: string;
    description: string;
    previewImage: Image | undefined;
}

interface Props {
    products: Product[];
}

const ProductOverviewPage: React.FC<Props> = ({ products }) => (
    <ContentContainer>
        <div className="product-grid">
            {products.map(product => (
                <Link key={product.id} href={`/products/${product.id}`}>
                    <ProductPreview
                        name={product.name}
                        image={product.previewImage}
                    />
                </Link>
            ))}
        </div>
    </ContentContainer>
);

export default ProductOverviewPage;