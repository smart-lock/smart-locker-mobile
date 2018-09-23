import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities'
import { OperationDefinitionNode } from 'graphql';

const httpUri = 'http://192.168.1.34:3002'
const wsUri = 'ws://192.168.1.34:3002'
const prismaUri = 'http://192.168.1.34:4466'
const Authorization = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNqbWR0czMzZTAwMTMwYTU4bm04Y2JrOHMiLCJuYW1lIjoiUmFmYWVsIFJpYmVpcm8gQ29ycmVpYSIsImVtYWlsIjoicmFmYWVsQHJhZmFlbC5jb20iLCJzY29wZXMiOlsiYWRtaW4iXSwiaWF0IjoxNTM3NjU4MTQzLCJleHAiOjE1NDAyNTAxNDMsImF1ZCI6InVzZXIiLCJpc3MiOiJlbnZpc2lvbmluZyIsInN1YiI6ImNqbWR0czMzZTAwMTMwYTU4bm04Y2JrOHMifQ.HsDAiChhrZ5d6m8XCdb0_1OrNba6Zpg6PM-Ly4Vr7kok--rUamDRFExqsfUyix3ne-Q3J6xpOUK1n3gXzQ6WCUGEBSJ9PwEstWaACM_M1dC_GEWYGJukeB0B6e9YHm_V2YLNvyifWKo_M0JGhGeYcVSDFfzXaa-7ApjK3WBgkULsSYsiKJ4Z_YoYu32ejIFlkFYXzlqJjqawNAjiIt47Ao36cu6Er9p-A4BRsXTawFhGiw1-m0RbFl3Z06h8BqwHd6ZEN7ZsY5TbMQfa5v0V-0foelsNHk-GdZC1zRMNbz1_aSQH5-jx86SlEdg4K1yX0RS5fCM_h1XDeTLubqa9XA'


const wsLink = new WebSocketLink({
  uri: wsUri,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization,
    },
  }
})


const httpLink = new HttpLink({
  uri: httpUri,
  headers: {
    Authorization,
  }
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query) as OperationDefinitionNode;
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    link,
  ]),
  cache: new InMemoryCache()
});