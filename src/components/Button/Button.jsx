import { ThreeDots } from "react-loader-spinner";
import classnames from "classnames";
export const Button = ({ label, disabled, onClick, isLoading }) => {
  const newLabel = !isLoading ? (
    label
  ) : (
    <ThreeDots
      height="14"
      width="50"
      radius="9"
      color="#FFFFFF"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classnames(
        "h-[45px] rounded-[5px] flex items-center content-center",
        {
          "opacity-70": isLoading || disabled,
        }
      )}
    >
      {newLabel}
    </button>
  );
};
