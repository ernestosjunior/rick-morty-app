import { memo, useEffect } from "react";
import { BaseLayout } from "../../containers";
import { CharacterCard } from "../../components";
import { fetchCharactersFirst } from "../../services";
import { useRoot } from "../../store";

export const HomePage = memo(() => {
  const {
    rootDispatch,
    rootState: { characters },
  } = useRoot();
  useEffect(() => {
    const fetchCharacters = async () => {
      const { data } = await fetchCharactersFirst();
      console.log(data);
      rootDispatch({ type: "setApiInfo", payload: { info: data.info } });
      rootDispatch({ type: "setCharacters", payload: { data: data.results } });
    };
    fetchCharacters();
    // eslint-disable-next-line
  }, []);

  return (
    <BaseLayout>
      <section className="w-full flex flex-wrap justify-center items-center gap-8 mt-12 mb-12">
        {!!characters.length &&
          characters.map(
            ({ image, name, status, species, location, origin }) => (
              <CharacterCard
                image={image}
                name={name}
                status={status}
                species={species}
                location={location}
                origin={origin}
              />
            )
          )}
      </section>
    </BaseLayout>
  );
});
