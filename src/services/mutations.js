import { gql } from "@apollo/client";

export const NEW_USER = gql`
  mutation NewUser($input: NewUser) {
    createUser(input: $input) {
      id
      name
    }
  }
`;

export const LOGIN = gql`
  mutation Login($data: NewLogin) {
    login(data: $data) {
      user {
        id
        name
      }
      token
    }
  }
`;
