import { gql } from "@apollo/client";

export const GET_FAVORITES = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
