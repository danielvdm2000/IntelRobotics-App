import { GraphQLClient } from "graphql-request";
import StrapiTokenProvider from "./StrapiTokenProvider";
import { getSdk } from "../../graphql";
import { getEnvironmentVariable } from "../client/utils";
import { getStrapiURL } from "../client/strapi";

// Setup the strapi token provider to always have a fresh request token
const strapiTokenProvider = new StrapiTokenProvider({
    baseUrl: getEnvironmentVariable('NEXT_PUBLIC_STRAPI_URL'),
    identifier: getEnvironmentVariable('STRAPI_SERVICE_USER_IDENTIFIER'),
    password: getEnvironmentVariable('STRAPI_SERVICE_USER_PASSWORD'),
    tokenLifetimeMs: 5 * 6 * 1000,
});

// Create typed sdk for making GraphQL queries
const gqlEndpoint = getStrapiURL('/graphql')
const client = new GraphQLClient(gqlEndpoint);
export const sdk = getSdk(client, async action => {
    const token = await strapiTokenProvider.getToken();

    return action({
        Authorization: `Bearer ${token}`,
    });
});