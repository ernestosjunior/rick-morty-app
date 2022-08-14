import { useReducer, useState } from "react";
import { useLocalStorage } from "react-use";
import { RootContext } from "./context";
import { initialState, rootReducer } from "./reducer";

export const RootProvider = ({ children }) => {
  const [token, setToken, removeToken] = useLocalStorage("token", "");
  const [user, setUser] = useState({
    isLogged: !!token,
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
        setUser,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};
