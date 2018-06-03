import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CosmeticLists from './CosmeticLists';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient();

client
  .query({
    query: gql`
      {
        allCosmetics {
          id
          name
        }
      }
    `
  })
  .then(result => console.log(result));
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="app-container">
          <Switch>
            <Route path="/" component={CosmeticLists} />
          </Switch>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
