import { GetStaticPropsResult, NextPage } from 'next'
import Link from 'next/link';
import { ProductOverviewQuery } from '../../graphql';
import { sdk } from '../../lib/api'
import { getStrapiMedia } from '../../lib/media';

interface Props {
    products: NonNullable<ProductOverviewQuery['products']>;
}

type Images = NonNullable<Props['products'][number]>['images'];

function firstImage(images: Images): string {
    if (images == null) return '';

    const first = images[0];

    if (first == null) return '';

    return getStrapiMedia(first);
}

const ProductsOverview: NextPage<Props> = ({ products }) => (
    <>
        <h1>IntelRobotics - Products</h1>
        <ul>
            {products.map(p => (
                <li key={p?.id}>
                    <image href={firstImage(p?.images)} />
                    <Link href={`/products/${p?.id}`}>{p?.name}</Link>
                </li>
            ))}
        </ul>
    </>
);

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
