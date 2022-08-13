import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rick-morty-api-prod.herokuapp.com/graphql/",
  cache: new InMemoryCache(),
});

export default client;
