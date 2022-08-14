import { useNavigate } from "react-router-dom";
import { Header } from "../../components";

export const BaseLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        redirectToHome={() => navigate("/")}
        redirectToList={() => navigate("/favorites")}
      />
      {children}
    </>
  );
};
