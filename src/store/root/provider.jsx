import { useReducer, useState } from "react";
import { useLocalStorage } from "react-use";
import { RootContext } from "./context";
import { initialState, rootReducer } from "./reducer";

export const RootProvider = ({ children }) => {
  const [token, setToken, removeToken] = useLocalStorage("token", "");
  const [user, setUser] = useState({
    isLogged: !!token,
    id: JSON.parse(window.localStorage.getItem("idUser")),
    username: JSON.parse(window.localStorage.getItem("username")),
  });
  const [rootState, rootDispatch] = useReducer(rootReducer, initialState);

  return (
    <RootContext.Provider
      value={{
        rootState,
        rootDispatch,
        token,
        setToken,
        removeToken,
        isLogged: user.isLogged,
        username: user.username,
        idUser: user.idUser,
        setUser,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};
