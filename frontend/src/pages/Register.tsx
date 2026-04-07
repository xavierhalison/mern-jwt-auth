import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../lib/api";
import AuthBox from "../components/AuthBox";
import Toast from "../components/Toast";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focusedElement, setFocusedElement] = useState<Element | null>(null);
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  const {
    mutate: createAccount,
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

  const handlePasswordBlur = (
    e: React.FocusEvent<HTMLInputElement, Element>,
  ) => {
    const target = e.target.getAttribute("id");

    if (target === "password" && password.length < 6) {
      setFormError("Must be at least 6 characters long");
    } else if (target === "confirm-password" && password.length < 6) {
      setFormError("Passwords must match each other");
    }
  };

  useEffect(() => {
    if (password.length > 6 || password === confirmPassword) {
      setFormError("");
    }
  }, []);

  const allowSubmit =
    !email || password.length < 6 || confirmPassword !== password;

  const handleSubmit = () => {
    if (allowSubmit) createAccount({ email, password, confirmPassword });
  };

  return (
    <AuthBox>
      <h1 className="text-3xl text-center font-bold font-funnel">
        Create an account
      </h1>

      {isError && <Toast variant="danger" message={error.message} />}

      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col my-2">
        <label htmlFor="password">Password:</label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onBlur={(e) => handlePasswordBlur(e)}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="confirm-password">Confirm password:</label>
        <Input
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={(e) => handlePasswordBlur(e)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
      </div>

      {formError && formError.length && (
        <Toast message={formError} variant="info" />
      )}

      <Button
        disabled={!allowSubmit}
        onClick={() => createAccount({ email, password, confirmPassword })}
      >
        Submit
      </Button>

      <div className="text-center">
        <p>Already have an account?</p>
        <Link className="text-blue-500 hover:underline" to="/Login">
          Sign in
        </Link>
      </div>
    </AuthBox>
  );
};

export default Register;
