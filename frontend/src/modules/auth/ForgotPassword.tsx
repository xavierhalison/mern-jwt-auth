import type z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPassword } from "../../lib/api";
import { Input, Submit } from "../../components/Input";
import { forgotPasswordSchema } from "../schemas/auth.schemas";
import toast from "react-hot-toast";

type forgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword = () => {
  const navigate = useNavigate();

  const { mutate: forgotPasswordRequest } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      emailSent();
      navigate("/login");
    },
    onError: (e: Error) => {
      requestError(e);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<forgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onTouched",
  });

  const onSubmit = (formData: forgotPasswordFormData) =>
    forgotPasswordRequest(formData);

  const requestError = (e: Error) => toast.error(e.message);
  const emailSent = () => toast.success("Email sent!");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl mb-5 text-center font-bold font-funnel">
        Forgot yout password?
      </h2>
      <p className="text-center mb-3">
        Get a reset password link in your email
      </p>
      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>

        <Input {...register("email")} type="email" />

        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email?.message}</span>
        )}
      </div>

      <div className="flex flex-col justify-center align-center">
        <Submit value="Verify Email" disabled={!isValid} />
        <Link className="text-blue-500 text-center hover:underline" to="/login">
          Back to login
        </Link>
      </div>
    </form>
  );
};

export default ForgotPassword;
