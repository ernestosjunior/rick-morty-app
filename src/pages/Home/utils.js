import {
  fetchCharacters,
  fetchMoreCharacters,
  fetchCharacterByFilter,
} from "../../services";

export const initialFilter = {
  name: "",
  species: "",
};

export const getCharacters = async (rootDispatch) => {
  const { data } = await fetchCharacters();
  rootDispatch({ type: "setApiInfo", payload: { info: data.info } });
  rootDispatch({
    type: "setFilteredCharacters",
    payload: { data: data.results },
  });
};

export const fetchFilter = async (rootDispatch, filter, setOpenModal) => {
  let query = "?";
  if (filter.name) {
    query = query + `name=${filter.name}`;
  }
  if (filter.species) {
    query = query + `&species=${filter.species}`;
  }

  const { data } = await fetchCharacterByFilter(query);
  rootDispatch({ type: "setApiInfo", payload: { info: data.info } });
  rootDispatch({
    type: "setFilteredCharacters",
    payload: { data: data.results },
  });
  setOpenModal(false);
};

export const handleNext = async (rootDispatch, apiInfo) => {
  if (!apiInfo.next) return;
  const { data } = await fetchMoreCharacters(apiInfo.next);
  rootDispatch({ type: "setApiInfo", payload: { info: data.info } });
  rootDispatch({
    type: "setCharacters",
    payload: { data: data.results },
  });
};
