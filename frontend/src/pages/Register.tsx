import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../lib/api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const {
    mutate: createAccount,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate("/", {
        replace: true,
      });
    },
  });

  return (
    <div className="full-page-container">
      <div className="box">
        <h2>Create an account</h2>

        {isError && <code>{error?.message || "An error cccurred"}</code>}

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
          />
        </div>

        <div className="form-control">
          <label htmlFor="confirm-password">Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              createAccount({ email, password, confirmPassword })
            }
          />
        </div>

        <p>- Must be at least 6 characters long.</p>

        <button
          disabled={
            !email || password.length < 6 || confirmPassword !== password
          }
          onClick={() => createAccount({ email, password, confirmPassword })}
        >
          Submit
        </button>
        <p>Already have an account?</p>
        <Link to="/Login">Sign in</Link>
      </div>
    </div>
  );
};

export default Register;
