import { memo } from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../../containers";
import { Input, Button } from "../../components";

export const SignInPage = memo(() => {
  return (
    <BaseLayout>
      <main className="w-full h-full flex flex-col items-center content-center max-w-[90vw] lg:max-w-[40vw]">
        <h1 className="text-6xl text-dark-color font-black mt-[24px]">Login</h1>
        <section className="flex flex-col w-full mt-[50px] gap-8">
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button label="Login" />
        </section>
      </main>
      <Link to="/signup" className="text-[#52B6FF] mt-[50px]">
        Don't have an account? Register!
      </Link>
    </BaseLayout>
  );
});
