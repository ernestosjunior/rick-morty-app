import { useNavigate } from "react-router-dom";
import { Header } from "../../components";
import { useRoot } from "../../store";

export const BaseLayout = ({ children }) => {
  const navigate = useNavigate();
  const { isLogged, userName, removeToken } = useRoot();

  return (
    <>
      <Header
        isLogged={isLogged}
        username={userName}
        redirectToHome={() => navigate("/")}
        redirectToList={() => navigate("/favorites")}
        redirectButton={() => {
          if (!isLogged) return navigate("/signin");

          removeToken();
          return navigate("/");
        }}
      />
      {children}
    </>
  );
};
