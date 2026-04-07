import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../lib/api";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthBox from "../components/AuthBox";
import Toast from "../components/Toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { mutate: signIn, isError } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/", {
        replace: true,
      });
    },
  });

  return (
    <AuthBox>
      <h1 className="text-3xl text-center font-bold font-funnel">
        Sign up into your account
      </h1>
      {isError && (
        <Toast variant="danger" message="invalid email or password" />
      )}

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
        </div>

        <div className="flex flex-col mt-3">
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

      <Link className="text-blue-500 hover:underline" to="/password/forgot">
        Forgot Password?
      </Link>

      <Button
        disabled={!email || password.length < 6}
        onClick={() => signIn({ email, password })}
      >
        Sign In
      </Button>

      <div className="text-center">
        <p>Don't have an account?</p>
        <Link className="text-blue-500 hover:underline" to="/register">
          Sign up
        </Link>
      </div>
    </AuthBox>
  );
};

export default Login;
