import API from "../config/apiClient";

type AuthPayload = {
  email: string;
  password: string;
  confirmPassword: string;
};

type SignInPayload = Omit<AuthPayload, "confirmPassword">;

export const login = async (data: SignInPayload) =>
  API.post("/auth/login", data);

export const register = async (data: AuthPayload) =>
  API.post("/auth/register", data);

export const verifyEmail = async (verificationCode: string) =>
  API.get(`/auth/email/verify/${verificationCode}`);
