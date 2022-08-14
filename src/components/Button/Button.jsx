import { ThreeDots } from "react-loader-spinner";
import classnames from "classnames";
export const Button = ({ label, disabled, onClick, isLoading }) => {
  const newLabel = !isLoading ? (
    <p className="w-full text-center text-white font-medium">{label}</p>
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
        "h-[45px] rounded-[5px] flex items-center content-center bg-[#00c8be]",
        {
          "opacity-70": isLoading || disabled,
        }
      )}
    >
      {newLabel}
    </button>
  );
};
