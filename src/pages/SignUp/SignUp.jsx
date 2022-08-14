import { memo, useState, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BaseLayout } from "../../containers";
import { Input, Button } from "../../components";
import { NEW_USER } from "../../services";
import { useMutation } from "@apollo/client";
import { setFields } from "../../utils/setFields";

const initialState = { name: "", email: "", password: "" };

export const SignUpPage = memo(() => {
  const navigate = useNavigate();
  const [field, setField] = useState(initialState);
  const [newUser, { data, loading, error }] = useMutation(NEW_USER);

  useLayoutEffect(() => {
    if (!loading && error) {
      toast.error("Error.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (!loading && data?.createUser?.id) {
      toast.success("Success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return navigate("/signin");
    }
    // eslint-disable-next-line
  }, [error, data]);

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
            onChange={(e) => setFields(setField, "name", e.target.value)}
            value={field.name}
          />
          <Input
            id="email"
            placeholder="email"
            onChange={(e) => setFields(setField, "email", e.target.value)}
            type="email"
            value={field.email}
          />
          <Input
            id="password"
            placeholder="password"
            type="password"
            onChange={(e) => setFields(setField, "password", e.target.value)}
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
