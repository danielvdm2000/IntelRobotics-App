import React from 'react';
import { GetStaticPropsResult, NextPage } from 'next'
import ProductOverviewPage, { Product } from '../../components/pages/ProductOverviewPage';
import { sdk } from '../../lib/server/sdk';
import { notNullFilter } from '../../lib/client/utils';

interface Props {
    products: Product[];
}

const ProductsOverview: NextPage<Props> = props => (
    <ProductOverviewPage products={props.products} />
);

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const result = await sdk.ProductOverview();

    if (result.products == null) {
        throw new Error('No products found')
    }

    const transformedProducts = result.products.filter(notNullFilter).map(raw => {
        const product: Product = {
            id: raw.id,
            name: raw.name,
            description: raw.description,
            previewImage: !raw.previewImage ? undefined : {
                src: raw.previewImage.url ?? '',
                alt: raw.previewImage.alternativeText ?? '',
            },
        }

        return product;
    });

    return {
        props: {
            products: transformedProducts,
        },
    }
}

export default ProductsOverview;
