import React from 'react';
import Link from 'next/link';
import ProductPreview from '../ProductPreview';
import { Image } from '../types';
import BasePage from './BasePage';

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
    <BasePage title="Products">
        <div className="product-grid">
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
    </BasePage>
);

export default ProductOverviewPage;