import { BaseLayout } from "../../containers";
import { CharacterCard } from "../../components";

export const HomePage = () => {
  return (
    <BaseLayout>
      <CharacterCard
        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        name="Rick Sanchez"
        status="Alive"
        species="Human"
        location={{ name: "Earth (Replacement Dimension)", url: "" }}
        origin={{ name: "Raising Gazorpazorp", url: "" }}
      />
    </BaseLayout>
  );
};
