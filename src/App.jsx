import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage, FavoritesPage } from "./pages";
// import { useQuery, gql } from "@apollo/client";

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//     }
//   }
// `;

function App() {
  // const { loading, error, data } = useQuery(GET_LOCATIONS);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
