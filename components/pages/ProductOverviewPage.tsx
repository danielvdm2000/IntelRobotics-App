import React from 'react';
import Link from 'next/link';
import ProductPreview from '../ProductPreview';

interface Image {
    src: string;
    alt: string | undefined;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    previewImage: Image | undefined;
    images: Image[];
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
            <Link href={`/products/${product.id}`}>
                <ProductPreview
                    key={product.id}
                    name={product.name}
                    image={product.previewImage}
                />
            </Link>
        ))}
    </div>
);

export default ProductOverviewPage;