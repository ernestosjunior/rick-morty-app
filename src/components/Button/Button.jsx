import { ThreeDots } from "react-loader-spinner";
import classnames from "classnames";
export const Button = ({ label, disabled, onClick, isLoading, className }) => {
  const newLabel = !isLoading ? (
    <p className="w-full text-center text-white font-medium">{label}</p>
  ) : (
    <ThreeDots
      height="14"
      width="50"
      radius="9"
      color="#FFFFFF"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ width: "100%", justifyContent: "center" }}
      wrapperClassName=""
      visible={true}
    />
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classnames(
        `w-full h-[45px] rounded-[5px] flex items-center justify-center bg-[#00c8be] ${className}`,
        {
          "opacity-70": isLoading || disabled,
        }
      )}
    >
      {newLabel}
    </button>
  );
};
