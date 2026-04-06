import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { login } from "../lib/api";

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
    <div className="full-page-container">
      <div className="box">
        <h2>Sign up into your account</h2>

        {isError && <code>Invalid email or password</code>}

        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && signIn({ email, password })}
          />
        </div>

        <Link to="/password/forgot">Forgot Password?</Link>
        <button
          disabled={isPending}
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
