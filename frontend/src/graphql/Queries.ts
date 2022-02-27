import { gql } from '@apollo/client';

export const LOAD_REVIEWS_QUERY = gql`
  query {
    getAllReviews {
      id
      user {
        id
        name
        picture
      }
      text
    }
  }
`;

export const LOAD_CLIENTS_QUERY = gql`
  query {
    getAllClients {
      id
      name
      email
    }
  }
`;
