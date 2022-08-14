import { memo, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BaseLayout } from "../../containers";
import { Input, Button } from "../../components";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../services";
import { useRoot } from "../../store";
import { setFields } from "../../utils/setFields";

const initialState = { email: "", password: "" };

export const SignInPage = memo(() => {
  const [field, setField] = useState(initialState);
  const { setToken, setUser } = useRoot();
  const [newLogin, { data, loading, error }] = useMutation(LOGIN);

  if (!loading && error) {
    return toast.error("Invalid credentials", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  if (!loading && data?.login?.token) {
    setToken(data.login.token);
    setUser({ isLogged: true, username: data.login.user.name });
    toast.success("Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return <Navigate to="/" />;
  }

  return (
    <BaseLayout>
      <main className="w-full h-full flex flex-col items-center content-center max-w-[90vw] lg:max-w-[40vw]">
        <h1 className="text-6xl text-dark-color font-black mt-[24px]">Login</h1>
        <section className="flex flex-col w-full mt-[50px] gap-8">
          <Input
            placeholder="email"
            onChange={(e) => setFields(setField, "email", e.target.value)}
            value={field.email}
            type="email"
          />
          <Input
            placeholder="password"
            onChange={(e) => setFields(setField, "password", e.target.value)}
            value={field.password}
            type="password"
          />
          <Button
            onClick={() => {
              newLogin({
                variables: {
                  data: {
                    email: field.email,
                    password: field.password,
                  },
                },
              });
              setField(initialState);
            }}
            label="Login"
            isLoading={loading}
            disabled={loading || !field.email || !field.password}
          />
        </section>
      </main>
      <Link to="/signup" className="text-[#52B6FF] mt-[50px]">
        Don't have an account? Register!
      </Link>
    </BaseLayout>
  );
});
