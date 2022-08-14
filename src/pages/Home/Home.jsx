import { memo, useEffect, useState } from "react";
import classnames from "classnames";
import { BaseLayout } from "../../containers";
import InfiniteScroll from "react-infinite-scroll-component";
import { CharacterCard, ModalFilter } from "../../components";
import { useRoot } from "../../store";
import { getCharacters, fetchFilter, handleNext, initialFilter } from "./utils";

export const HomePage = memo(() => {
  const [filter, setFilter] = useState(initialFilter);
  const [openModal, setOpenModal] = useState(false);
  const {
    rootDispatch,
    rootState: { characters, apiInfo },
  } = useRoot();

  useEffect(() => {
    getCharacters(rootDispatch);
    // eslint-disable-next-line
  }, []);

  const buttonFilterLabel =
    !openModal && (filter.name || filter.species) ? "Remove Filters" : "Filter";
  const isRemoveFilters = buttonFilterLabel === "Remove Filters";

  return (
    <>
      <ModalFilter
        open={openModal}
        closeModal={setOpenModal}
        fetchByName={() => fetchFilter(rootDispatch, filter, setOpenModal)}
        setFilter={setFilter}
        filters={filter}
      />
      <BaseLayout>
        <button
          onClick={() => {
            if (isRemoveFilters) {
              setFilter(initialFilter);
              return getCharacters(rootDispatch);
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
          next={() => handleNext(rootDispatch, apiInfo)}
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
