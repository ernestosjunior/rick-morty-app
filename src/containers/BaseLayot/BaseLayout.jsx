import { Header } from "../../components";

export const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
