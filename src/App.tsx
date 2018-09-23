import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
import { apolloClient } from './apollo';
import { RootNavigator } from './navigation/RootNavigator';
import { ApolloProvider } from 'react-apollo';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Fragment>
          <StatusBar barStyle='light-content' />
          <RootNavigator persistenceKey={"NavigationState5"} />
        </Fragment>
      </ApolloProvider>  
    )
  }
}
