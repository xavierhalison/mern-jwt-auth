import type z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../../lib/api";
import { Input, Submit } from "../../components/Input";
import { loginSchema } from "../schemas/auth.schemas";
import toast from "react-hot-toast";

type loginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();

  const { mutate: signIn } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/", {
        replace: true,
      });
    },
    onError: (e: Error) => {
      requestError(e);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const requestError = (e: Error) => toast.error(e.message);
  const onSubmit = (data: loginFormData) => signIn(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl text-center font-bold font-funnel">
        Sign up into your account
      </h1>
      <div className="flex flex-col my-5">
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <Input {...register("email")} type="email" />
          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="password">Password:</label>
          <Input {...register("password")} type="password" />
        </div>
      </div>

      <div className="flex flex-col justify-center align-center">
        <Link className="text-blue-500 hover:underline" to="/password/forgot">
          Forgot Password?
        </Link>
        <Submit value="Sign In" disabled={!isValid} />
      </div>

      <div className="text-center">
        <p>Don't have an account?</p>
        <Link className="text-blue-500 hover:underline" to="/register">
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default Login;
