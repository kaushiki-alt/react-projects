// import {
//   CombinedGraphQLErrors,
//   CombinedProtocolErrors,
// } from "@apollo/client/errors";
// import { ErrorLink } from "@apollo/client/link/error";
import { ApolloLink, HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";

    const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
    uri: GITHUB_GRAPHQL_API,
    headers: {
        Authorization : `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
})

const link = ApolloLink.from([httpLink])

const client = new ApolloClient({
    link,
    cache:new InMemoryCache(),
})

export default client;