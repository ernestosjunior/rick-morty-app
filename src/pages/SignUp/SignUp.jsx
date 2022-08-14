import { memo } from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "../../containers";
import { Input, Button } from "../../components";

export const SignUpPage = memo(() => {
  return (
    <BaseLayout>
      <main className="w-full h-full flex flex-col items-center content-center max-w-[90vw] lg:max-w-[40vw]">
        <h1 className="text-6xl text-dark-color font-black mt-[24px]">
          Register
        </h1>
        <section className="flex flex-col w-full mt-[50px] gap-8">
          <Input placeholder="name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button label="Register" />
        </section>
      </main>
      <Link to="/signin" className="text-[#52B6FF] mt-[50px]">
        Already have an account? Login!
      </Link>
    </BaseLayout>
  );
});
