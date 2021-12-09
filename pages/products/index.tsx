import React from 'react';
import { GetStaticPropsResult, NextPage } from 'next'
import ProductOverviewPage, { Product } from '../../components/pages/ProductOverviewPage';
import { ProductOverviewQuery } from '../../graphql';
import { sdk } from '../../lib/server/sdk';
import { notNullFilter } from '../../lib/client/utils';

type RawProducts = NonNullable<ProductOverviewQuery['products']>;

interface Props {
    products: RawProducts;
}

const ProductsOverview: NextPage<Props> = ({ products }) => {
    const transformedProducts: Product[] = React.useMemo(() => {
        return products.filter(notNullFilter).map(raw => {

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
    }, [products]);

    return <ProductOverviewPage products={transformedProducts} />
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const { products } = await sdk.ProductOverview();

    console.log(products);

    if (products == null) {
        throw new Error('No products found')
    }

    return {
        props: {
            products,
        },
    }
}

export default ProductsOverview;
