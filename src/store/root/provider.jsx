import { useReducer } from "react";
import { RootContext } from "./context";
import { initialState, rootReducer } from "./reducer";

export const RootProvider = ({ children }) => {
  const [rootState, rootDispatch] = useReducer(rootReducer, initialState);

  return (
    <RootContext.Provider value={{ rootState, rootDispatch }}>
      {children}
    </RootContext.Provider>
  );
};
