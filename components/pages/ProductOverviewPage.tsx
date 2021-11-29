import React from 'react';
import Link from 'next/link';
import ProductPreview from '../ProductPreview';
import { Image } from '../types';

export interface Product {
    id: string;
    name: string;
    description: string;
    previewImage: Image | undefined;
}

interface ProductOverviewPageProps {
    products: Product[];
}

const ProductOverviewPage: React.FC<ProductOverviewPageProps> = ({ products }) => (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
    }}>
        {products.map(product => (
            <Link key={product.id} href={`/products/${product.id}`}>
                <div>
                    <ProductPreview
                        name={product.name}
                        image={product.previewImage}
                    />
                </div>
            </Link>
        ))}
    </div>
);

export default ProductOverviewPage;