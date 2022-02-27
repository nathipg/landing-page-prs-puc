import { gql } from '@apollo/client';

export const CREATE_CLIENT_MUTATION = gql`
  mutation createClient($name: String!, $email: String!, $password: String!) {
    createClient(name: $name, email: $email, password: $password) {
      id
    }
  }
`;
