import { useReducer } from "react";
import { useLocalStorage } from "react-use";
import { RootContext } from "./context";
import { initialState, rootReducer } from "./reducer";

export const RootProvider = ({ children }) => {
  const [rootState, rootDispatch] = useReducer(rootReducer, initialState);
  const [token, setToken, removeToken] = useLocalStorage("token", "");
  const isLogged = !!token;

  return (
    <RootContext.Provider
      value={{
        rootState,
        rootDispatch,
        token,
        setToken,
        removeToken,
        isLogged,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};
