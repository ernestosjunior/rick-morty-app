import { useContext } from "react";
import { RootContext } from "./context";

export const useRoot = () => {
  const { rootState, rootDispatch } = useContext(RootContext);

  return {
    rootState,
    rootDispatch,
  };
};
