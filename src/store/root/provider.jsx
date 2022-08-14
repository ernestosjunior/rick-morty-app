import { useReducer, useState } from "react";
import { useLocalStorage } from "react-use";
import { RootContext } from "./context";
import { initialState, rootReducer } from "./reducer";

export const RootProvider = ({ children }) => {
  const [user, setUser] = useState({ isLogged: false, userName: "" });
  const [rootState, rootDispatch] = useReducer(rootReducer, initialState);
  const [token, setToken, removeToken] = useLocalStorage("token", "");

  return (
    <RootContext.Provider
      value={{
        rootState,
        rootDispatch,
        token,
        setToken,
        removeToken,
        isLogged: user.isLogged,
        userName: user.userName,
        setUser,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};
