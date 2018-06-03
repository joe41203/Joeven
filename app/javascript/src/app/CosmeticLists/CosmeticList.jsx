import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const CosmeticList = () => (
  <Query
    query={gql`
      {
        allCosmetics {
          id
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.allCosmetics.map(({ id, name }) => (
        <div key={id}>
          <p>{name}</p>
        </div>
      ));
    }}
  </Query>
);

export default CosmeticList;
