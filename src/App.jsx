import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage, FavoritesPage } from "./pages";
import { ProtectedRoutes } from "./components";
import { RootProvider } from "./store";

function App() {
  return (
    <BrowserRouter>
      <RootProvider>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<HomePage />} />
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
