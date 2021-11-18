import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../graphql';

export function getStrapiURL(path = ''): string {
    const base = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
    return `${base}${path}`;
}

// Create typed sdk for making GraphQL queries
const gqlEndpoint = getStrapiURL('/graphql')
const client = new GraphQLClient(gqlEndpoint);
export const sdk = getSdk(client);
