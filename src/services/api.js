import axios from "axios";

export const api = axios.create();

export const fetchCharactersFirst = async () => {
  return api.get("https://rickandmortyapi.com/api/character");
};
