import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../lib/api";
import Input from "../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {
    mutate: signIn,
    isPending,
    isError,
  } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/", {
        replace: true,
      });
    },
  });

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex flex-col border border-red-500 p-5">
        <h1 className="text-3xl text-center font-bold">
          Sign up into your account
        </h1>
        {isError && <code>Invalid email or password</code>}

        <div className="flex flex-col my-5">
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={setEmail}
            />
            <input />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={setPassword}
              keyboardSubmit={() => signIn({ email, password })}
            />
          </div>
        </div>

        <Link to="/password/forgot">Forgot Password?</Link>
        <button
          disabled={!email || password.length < 6}
          onClick={() => signIn({ email, password })}
        >
          Sign In
        </button>
        <p>Don't have an account?</p>
        <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
