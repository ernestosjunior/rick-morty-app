import { memo, useEffect } from "react";
import { BaseLayout } from "../../containers";
import InfiniteScroll from "react-infinite-scroll-component";
import { CharacterCard } from "../../components";
import { fetchCharacters, fetchMoreCharacters } from "../../services";
import { useRoot } from "../../store";

export const HomePage = memo(() => {
  const {
    rootDispatch,
    rootState: { characters, apiInfo },
  } = useRoot();

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await fetchCharacters();
      rootDispatch({ type: "setApiInfo", payload: { info: data.info } });
      rootDispatch({ type: "setCharacters", payload: { data: data.results } });
    };
    getCharacters();
    // eslint-disable-next-line
  }, []);

  const handleNext = async () => {
    if (!apiInfo.next) return;
    const { data } = await fetchMoreCharacters(apiInfo.next);
    rootDispatch({ type: "setApiInfo", payload: { info: data.info } });
    rootDispatch({ type: "setCharacters", payload: { data: data.results } });
  };

  return (
    <BaseLayout>
      <InfiniteScroll
        dataLength={characters.length}
        next={handleNext}
        hasMore
        className="w-full h-full flex flex-wrap justify-center items-center gap-8 mt-12 mb-12"
      >
        {!!characters.length &&
          characters.map(
            ({ id, image, name, status, species, location, origin }, index) => (
              <CharacterCard
                key={`${id}`}
                image={image}
                name={name}
                status={status}
                species={species}
                location={location}
                origin={origin}
              />
            )
          )}
      </InfiniteScroll>
    </BaseLayout>
  );
});
