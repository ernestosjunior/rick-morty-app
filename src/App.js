import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(loading, error, data);
  return <></>;
}

export default App;
