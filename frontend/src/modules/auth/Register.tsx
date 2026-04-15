import type z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { register as registerUser } from "../../lib/api";
import { Input, Submit } from "../../components/Input";
import { registerSchema } from "../schemas/auth.schemas";
import toast from "react-hot-toast";

type registerFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const navigate = useNavigate();

  const { mutate: createAccount } = useMutation({
    mutationFn: registerUser,
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
  } = useForm<registerFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = (formData: registerFormData) => createAccount(formData);

  const requestError = (e: Error) => toast.error(e.message);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl text-center font-bold font-funnel">
        Create an account
      </h1>

      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>

        <Input {...register("email")} type="email" />

        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email?.message}</span>
        )}
      </div>

      <div className="flex flex-col my-2">
        <label htmlFor="password">Password:</label>
        <Input {...register("password")} type="password" />

        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="confirm-password">Confirm password:</label>
        <Input {...register("confirmPassword")} type="password" />

        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
          </span>
        )}
      </div>

      <div className="flex flex-row justify-center align-center">
        <Submit value="Sign Up" disabled={!isValid} />
      </div>

      <div className="flex flex-col text-center">
        <p>Already have an account?</p>
        <Link className="text-blue-500 hover:underline" to="/login">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default Register;
