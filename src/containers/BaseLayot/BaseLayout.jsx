import { useNavigate } from "react-router-dom";
import { Header } from "../../components";
import { useRoot } from "../../store";

export const BaseLayout = ({ children }) => {
  const navigate = useNavigate();
  const { isLogged, username, removeToken } = useRoot();

  return (
    <main>
      <Header
        isLogged={isLogged}
        username={username}
        redirectToHome={() => navigate("/")}
        redirectToList={() => navigate("/favorites")}
        redirectButton={() => {
          if (!isLogged) return navigate("/signin");

          removeToken();
          return navigate("/signin");
        }}
      />
      <section className="flex flex-col w-full content-center items-center">
        {children}
      </section>
    </main>
  );
};
