import { gql } from '@apollo/client';

export const LOAD_REVIEWS = gql`
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
