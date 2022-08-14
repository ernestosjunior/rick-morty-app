import axios from "axios";

export const api = axios.create();

export const fetchCharacters = async () => {
  return api.get("https://rickandmortyapi.com/api/character");
};

export const fetchMoreCharacters = async (query) => {
  return api.get(query);
};
