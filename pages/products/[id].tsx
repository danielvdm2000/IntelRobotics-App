import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, NextPage } from "next";
import { SingleProductQuery } from "../../graphql";
import { sdk } from "../../lib/server/sdk";
import { notNullFilter } from "../../lib/client/utils";
import ProductPage from "../../components/pages/ProductPage";

interface Props {
    product: NonNullable<SingleProductQuery['product']>;
}

type Paths = {
    id: string;
}

const SingleProduct: NextPage<Props> = ({ product }) => (
    <ProductPage 
        name={product.name}
        description={product.description}
    />
);

export async function getStaticPaths(): Promise<GetStaticPathsResult<Paths>> {
    const { products } = await sdk.ProductIds();

    if (products == null) {
        throw new Error('Could not get product ids');
    }

    const paths = products.filter(notNullFilter).map(p => {
        return {
            params: {
                id: p.id,
            }
        }
    });

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context: GetStaticPropsContext<Paths>): Promise<GetStaticPropsResult<Props>> {
    const id = context.params?.id;

    if (typeof id !== 'string') {
        throw new Error('The requested route is not a valid product id');
    }

    const { product } = await sdk.SingleProduct({ id });

    if (product == null) {
        throw new Error(`Can't get the product with the id of ${id}`);
    }

    return {
        props: {
            product,
        }
    }
}

export default SingleProduct;