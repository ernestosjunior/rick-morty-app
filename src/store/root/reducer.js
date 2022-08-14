import * as actions from "./actions";

export const initialState = {
  apiInfo: {
    count: null,
    next: null,
    pages: null,
    prev: null,
  },
  characters: [],
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "setApiInfo":
      return actions.setApiInfo(state, action.payload.info);
    case "setCharacters":
      return actions.setCharacters(action.payload.data);
    default:
      throw new Error();
  }
};
