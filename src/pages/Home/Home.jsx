import { memo, useEffect, useState } from "react";
import classnames from "classnames";
import { BaseLayout } from "../../containers";
import InfiniteScroll from "react-infinite-scroll-component";
import { CharacterCard, ModalFilter } from "../../components";
import {
  fetchCharacters,
  fetchMoreCharacters,
  fetchCharacterByFilter,
} from "../../services";
import { useRoot } from "../../store";

const initialFilter = {
  name: "",
  species: "",
};

export const HomePage = memo(() => {
  const [filter, setFilter] = useState(initialFilter);
  const [openModal, setOpenModal] = useState(false);
  const {
    rootDispatch,
    rootState: { characters, apiInfo },
  } = useRoot();

  const getCharacters = async () => {
    const { data } = await fetchCharacters();
    rootDispatch({ type: "setApiInfo", payload: { info: data.info } });
    rootDispatch({
      type: "setFilteredCharacters",
      payload: { data: data.results },
    });
  };

  const fetchFilter = async () => {
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

  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line
  }, []);

  const handleNext = async () => {
    if (!apiInfo.next) return;
    const { data } = await fetchMoreCharacters(apiInfo.next);
    rootDispatch({ type: "setApiInfo", payload: { info: data.info } });
    rootDispatch({
      type: "setCharacters",
      payload: { data: data.results },
    });
  };
  const buttonFilterLabel =
    filter.name || filter.species ? "Remove Filters" : "Filter";
  const isRemoveFilters = buttonFilterLabel === "Remove Filters";

  return (
    <>
      <ModalFilter
        open={openModal}
        closeModal={setOpenModal}
        fetchByName={fetchFilter}
        setFilter={setFilter}
        filters={filter}
      />
      <BaseLayout>
        <button
          onClick={() => {
            if (isRemoveFilters) {
              setFilter(initialFilter);
              return getCharacters();
            }

            setOpenModal(true);
          }}
          className={classnames(
            "self-end flex justify-end mr-6 border border-solid rounded-lg pt-2 pb-2 pl-4 pr-4 font-bold text-dark-color mt-4 hover:text-white",
            {
              "border-[#fb4e5f]": isRemoveFilters,
              "hover:bg-[#fb4e5f]": isRemoveFilters,
              "border-[#00c8be]": !isRemoveFilters,
              "hover:bg-[#00c8be]": !isRemoveFilters,
            }
          )}
        >
          {buttonFilterLabel}
        </button>
        <InfiniteScroll
          dataLength={characters.length}
          next={handleNext}
          hasMore
          className="w-full h-full flex flex-wrap justify-center items-center gap-8 mt-12 mb-12"
        >
          {!!characters.length &&
            characters.map(
              (
                {
                  id,
                  image,
                  name,
                  status,
                  species,
                  location,
                  origin,
                  episode,
                  created,
                },
                index
              ) => (
                <CharacterCard
                  key={`${(id, index)}`}
                  image={image}
                  name={name}
                  status={status}
                  species={species}
                  location={location}
                  origin={origin}
                  episode={episode}
                  created={created}
                />
              )
            )}
        </InfiniteScroll>
      </BaseLayout>
    </>
  );
});
