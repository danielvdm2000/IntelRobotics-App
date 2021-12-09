import React from 'react';
import Link from 'next/link';
import ProductPreview from '../ProductPreview';
import { Image } from '../types';
import ContentContainer from '../ContentContainer';
import styles from '../../styles/ProductOverview.module.css';

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
    <ContentContainer>
        <div className={styles.productGrid}>
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
    </ContentContainer>
);

export default ProductOverviewPage;