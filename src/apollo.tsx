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
const Authorization = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNqbWI0MzN3NzAwNzMwYTIweTU0Ym16aGQiLCJuYW1lIjoiUmFmYWVsIFJpYmVpcm8gQ29ycmVpYSIsImVtYWlsIjoicmFmYWVsQHJhZmFlbC5jb20iLCJzY29wZXMiOlsiYWRtaW4iXSwiaWF0IjoxNTM3NDgwNTg4LCJleHAiOjE1NDAwNzI1ODgsImF1ZCI6InVzZXIiLCJpc3MiOiJlbnZpc2lvbmluZyIsInN1YiI6ImNqbWI0MzN3NzAwNzMwYTIweTU0Ym16aGQifQ.gUGQv7v_-DpQOD-_25mpAVJvu6WwlHwlqbIN1QFjHnbuBiejelk_-lzsMVv4N-RJRIG6gYfkMWrfmx1xeQTfl1CccsxpikhRxKTnjV2G07bZJiYyKolLfMtDEJOGHgxQ0OknPDLP4uIWdfjpCjonTzIAJ-4f9bqk2H5oCikxODqN9Nal4Rwj-tWyTo_xAoiRbmVrmOvUYZHQQ6WA1Y_lZrnJwXrQUgBoiUro3ioMua0oqNSsKLSCyUcfNbEQWMsr4kxUgHum1sCKRw9z3bAtUEp2OBxvREES7YgLzhbJlqLvLXsE68ln0mHjAE0eodzMtJV3iS6CFRZMO_9oWWHXzQ'


const wsLink = new WebSocketLink({
  uri: wsUri,
  options: {
    reconnect: true
  }
});

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