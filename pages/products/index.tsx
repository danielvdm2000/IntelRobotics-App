import React from 'react';
import { GetStaticPropsResult, NextPage } from 'next'
import ProductOverviewPage, { Product } from '../../components/pages/ProductOverviewPage';
import { ProductOverviewQuery } from '../../graphql';
import { getStrapiMedia } from '../../lib/client/strapi';
import { sdk } from '../../lib/server/sdk';
import { notNullFilter } from '../../lib/client/utils';
import ContentContainer from '../../components/ContentContainer';

type RawProducts = NonNullable<ProductOverviewQuery['products']>;

interface Props {
    products: RawProducts;
}

type Image = NonNullable<NonNullable<Props['products'][number]>['previewImage']>;

function prepareImage(img: Image) {
    return {
        src: getStrapiMedia(img.url),
        alt: img.alternativeText ?? undefined,
    }
}

const ProductsOverview: NextPage<Props> = ({ products }) => {
    const transformedProducts: Product[] = React.useMemo(() => {
        return products.filter(notNullFilter).map(raw => {
            const previewImage = raw.previewImage ? prepareImage(raw.previewImage) : undefined;

            const product: Product = {
                id: raw.id,
                name: raw.name,
                description: raw.description,
                previewImage: previewImage,
            }

            return product;
        });
    }, [products]);

    return <ProductOverviewPage products={transformedProducts} />
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const { products } = await sdk.ProductOverview();

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
