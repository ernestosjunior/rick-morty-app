import * as actions from "./actions";

export const initialState = {
  characters: [],
  apiInfo: {
    count: null,
    next: null,
    pages: null,
    prev: null,
  },
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "setApiInfo":
      return actions.setApiInfo(state, action.payload.info);
    case "setCharacters":
      return actions.setCharacters(state, action.payload.data);
    case "setFilteredCharacters":
      return actions.setFilteredCharacters(state, action.payload.data);
    default:
      throw new Error();
  }
};
