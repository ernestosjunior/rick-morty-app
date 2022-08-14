import { gql } from "@apollo/client";

export const NEW_USER = gql`
  mutation NewUser($input: NewUser) {
    createUser(input: $input) {
      id
      name
    }
  }
`;
