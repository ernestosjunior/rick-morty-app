import { RadioGroup, RadioButton } from "react-radio-buttons";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { ReactComponent as CloseIcon } from "../../assets/svgs/close.svg";
import { initialFilter } from "../../pages/Home/utils";

export const ModalFilter = ({
  open,
  closeModal,
  fetchByName,
  setFilter,
  filters,
}) => {
  if (!open) return null;

  return (
    <article className="flex justify-center items-center fixed z-10 h-screen w-screen bg-[rgba(0,0,0,.5)] top-0 left-0">
      <div className="min-w-[30vw] min-h-[50vh] bg-white rounded-20 flex flex-col items-center pt-4 box-border relative">
        <CloseIcon
          className="absolute w-[30px] top-1 right-4 cursor-pointer"
          onClick={() => {
            setFilter(initialFilter);
            closeModal(false);
          }}
        />
        <p className="w-full pl-4 ">Name</p>
        <section className=" w-full flex gap-4 pl-4 pr-4 justify-center mt-4">
          <Input
            className="w-full box-border flex-2"
            placeholder="character name"
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </section>
        <p className="w-full pl-4 mt-[6%] mb-[6%]">Species</p>
        <section className="w-full pl-4 pr-4 ">
          <div className="">
            <RadioGroup
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, species: value }))
              }
              horizontal
            >
              <RadioButton value="alien" pointColor="#00c8be">
                Alien
              </RadioButton>
              <RadioButton value="human" pointColor="#00c8be">
                Human
              </RadioButton>
            </RadioGroup>
          </div>
        </section>
        <Button
          label="Filter"
          className=" w-[70%] content-end mt-[10%]"
          onClick={fetchByName}
          disabled={!filters.name && !filters.species}
        />
      </div>
    </article>
  );
};
