import { memo, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BaseLayout } from "../../containers";
import { Input, Button } from "../../components";
import { NEW_USER } from "../../services";
import { useMutation } from "@apollo/client";

const initialState = { name: "", email: "", password: "" };

export const SignUpPage = memo(() => {
  const [field, setField] = useState(initialState);
  const [newUser, { data, loading, error }] = useMutation(NEW_USER);

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

  if (data?.createUser?.id) {
    toast.success("Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return <Navigate to="/signin" />;
  }

  const setFields = (field, value) => {
    setField((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <BaseLayout>
      <main className="w-full h-full flex flex-col items-center content-center max-w-[90vw] lg:max-w-[40vw]">
        <h1 className="text-6xl text-dark-color font-black mt-[24px]">
          Register
        </h1>
        <section className="flex flex-col w-full mt-[50px] gap-8">
          <Input
            id="name"
            placeholder="name"
            onChange={setFields}
            value={field.name}
          />
          <Input
            id="email"
            placeholder="email"
            onChange={setFields}
            type="email"
            value={field.email}
          />
          <Input
            id="password"
            placeholder="password"
            type="password"
            onChange={setFields}
            value={field.password}
          />
          <Button
            label="Register"
            onClick={() => {
              newUser({
                variables: {
                  input: {
                    name: field.name,
                    email: field.email,
                    password: field.password,
                  },
                },
              });
              setField(initialState);
            }}
            isLoading={loading}
            disabled={loading || !field.name || !field.email || !field.password}
          />
        </section>
      </main>
      <Link to="/signin" className="text-[#52B6FF] mt-[50px]">
        Already have an account? Login!
      </Link>
    </BaseLayout>
  );
});
