import classnames from "classnames";

export const CharacterCard = ({
  image,
  name,
  status,
  species,
  location,
  origin,
}) => {
  return (
    <article className="rounded-20 w-card min-h-card shadow-card relative">
      <img
        src={image}
        alt="Character"
        className="rounded-t-20 object-cover w-card"
      />
      <div className="w-full flex flex-col items-center content-center">
        <h1 className="text-dark-color text-lg font-extrabold mt-[18px]">
          {name}
        </h1>
        <section className="flex items-center">
          <div
            className={classnames("w-[9px] h-[9px] rounded-[50%] m-1.5", {
              "bg-[#666666]": status !== "Alive" && status !== "Dead",
              "bg-statusGreen": status === "Alive",
              "bg-statusRed": status === "Dead",
            })}
          />
          <p>
            {status} - {species}
          </p>
        </section>
        <section className="flex flex-col gap-6 mt-4 text-center">
          <div>
            <p className="text-dark-color">Last known location:</p>
            <p className="text-dark-color hover:text-orange-color cursor-pointer">
              {location?.name}
            </p>
          </div>
          <div>
            <p className="text-dark-color">First seen in:</p>
            <p className="text-dark-color hover:text-orange-color cursor-pointer">
              {origin?.name}
            </p>
          </div>
        </section>
      </div>
    </article>
  );
};
