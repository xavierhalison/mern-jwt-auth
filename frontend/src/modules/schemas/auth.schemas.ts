import z from "zod";

const passwordMinLengthMessage = "Password must be at least 6 characters long";

export const emailSchema = z
  .email()
  .min(1)
  .max(255)
  .regex(/^\S+@\S+\.\S+$/, "Use a valid email");

const passwordSchema = z.string().min(6, passwordMinLengthMessage).max(255);

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerSchema = loginSchema
  .extend({
    confirmPassword: z.string().min(6, passwordMinLengthMessage).max(255),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({ email: emailSchema });

export const verificationCodeSchema = z.string().min(1).max(24);

export const resetPasswordSchema = z.object({
  password: passwordSchema,
  verificationCode: verificationCodeSchema,
});
