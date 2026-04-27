import type z from "zod";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPassword } from "../../lib/api";
import { Input, Submit } from "../../components/Input";
import { resetPasswordSchema } from "../schemas/auth.schemas";
import toast from "react-hot-toast";

type resetPasswordFormData = z.infer<typeof resetPasswordSchema>;

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { mutate: resetPasswordRequest } = useMutation({
    mutationFn: resetPassword,
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
  } = useForm<resetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onTouched",
  });

  const code = searchParams.get("code");
  const exp = Number(searchParams.get("exp"));
  const now = Date.now();
  const linkIsValid = code && exp && exp > now;

  const emailSent = () => toast.success("Password reset");
  const requestError = (e: Error) => toast.error(e.message);

  const onSubmit = (formData: resetPasswordFormData) =>
    resetPasswordRequest({ ...formData });

  return linkIsValid ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl mb-5 text-center font-bold font-funnel">
        Create a new password
      </h2>
      <p className="text-center mb-3">It must be at least 6 characters long</p>
      <div className="flex flex-col">
        <label htmlFor="email">New password:</label>

        <Input {...register("password")} type="password" />

        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col justify-center align-center">
        <Submit value="Reset Password" disabled={!isValid} />
      </div>
    </form>
  ) : (
    <div className="text-center">
      <p>This link is either invalid or expired</p>
      <Link className="text-blue-500 hover:underline" to="/password/forgot">
        Request a new password reset link
      </Link>
    </div>
  );
};

export default ResetPassword;
