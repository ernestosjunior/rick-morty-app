import { useNavigate } from "react-router-dom";
import { Header } from "../../components";
import { useRoot } from "../../store";

export const BaseLayout = ({ children }) => {
  const navigate = useNavigate();
  const { isLogged, username, removeToken, setUser } = useRoot();

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
          window.localStorage.removeItem("username");
          setUser({ isLogged: false, username: "" });
          return navigate("/");
        }}
      />
      <section className="flex flex-col w-full content-center items-center">
        {children}
      </section>
    </main>
  );
};
