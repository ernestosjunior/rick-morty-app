import classnames from "classnames";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";

export const Header = ({
  isLogged,
  username,
  redirectToList,
  redirectToHome,
  redirectButton,
}) => {
  const label = isLogged ? "LOGOUT" : "LOGIN";
  const path = window.location.pathname;
  const hasButtonLogin = !path.includes("signin") && !path.includes("signup");
  return (
    <header className="flex justify-between items-center pr-6 pl-6 h-60">
      <Logo className="w-40" />
      <div className="flex items-center gap-7">
        {hasButtonLogin && path !== "/" && (
          <p
            className="font-bold text-lg text-dark-color cursor-pointer"
            onClick={redirectToHome}
          >
            Home
          </p>
        )}
        {isLogged && (
          <>
            <p
              className="font-bold text-lg text-orange-color cursor-pointer"
              onClick={redirectToList}
            >
              Favorites List
            </p>
            <p className="font-bold text-dark-color text-lg">Hi, {username}</p>
          </>
        )}
        {hasButtonLogin && (
          <button
            onClick={redirectButton}
            className={classnames(
              "border border-solid rounded-lg pt-2 pb-2 pl-4 pr-4 font-bold text-dark-color hover:text-white",
              {
                "border-[#fb4e5f]": isLogged,
                "hover:bg-[#fb4e5f]": isLogged,
                "border-[#00c8be]": !isLogged,
                "hover:bg-[#00c8be]": !isLogged,
              }
            )}
          >
            {label}
          </button>
        )}
      </div>
    </header>
  );
};
