import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage, FavoritesPage } from "./pages";
import { ProtectedRoutes } from "./components";
import { RootProvider } from "./store";
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
      <RootProvider>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <HomePage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/favorites"
            element={
              <ProtectedRoutes>
                <FavoritesPage />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </RootProvider>
    </BrowserRouter>
  );
}

export default App;
