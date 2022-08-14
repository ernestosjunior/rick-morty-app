export const setApiInfo = (state, info) => {
  return { apiInfo: { ...state.apiInfo, ...info } };
};

export const setCharacters = (characters) => {
  return { characters };
};
