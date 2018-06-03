import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_ALL_COSMETICS = gql`
  query cosmetics {
    cosmetics {
      id
      name
    }
  }
`;

const CosmeticList = () => (
  <Query query={GET_ALL_COSMETICS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.cosmetics.map(({ id, name }) => (
        <div key={id}>
          <p>{name}</p>
        </div>
      ));
    }}
  </Query>
);

export default CosmeticList;
