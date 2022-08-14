export const setApiInfo = (state, info) => {
  return { ...state, apiInfo: { ...state.apiInfo, ...info } };
};

export const setCharacters = (state, characters) => {
  return { ...state, characters: [...state.characters, ...characters] };
};
