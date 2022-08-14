import { useContext } from "react";
import { RootContext } from "./context";

export const useRoot = () => {
  const {
    rootState,
    rootDispatch,
    token,
    setToken,
    removeToken,
    isLogged,
    setUser,
  } = useContext(RootContext);

  return {
    rootState,
    rootDispatch,
    token,
    setToken,
    removeToken,
    isLogged,
    setUser,
  };
};
