import API from "../config/apiClient";

type AuthPayload = {
  email: string;
  password: string;
  confirmPassword: string;
};

type SignInPayload = Omit<AuthPayload, "confirmPassword">;

type ForgotPasswordPayload = Pick<AuthPayload, "email">;

type ResetPasswordPayload = Pick<AuthPayload, "password"> & {
  verificationCode?: string;
};

export const login = async (data: SignInPayload) =>
  API.post("/auth/login", data);

export const register = async (data: AuthPayload) =>
  API.post("/auth/register", data);

export const verifyEmail = async (verificationCode: string) =>
  API.get(`/auth/email/verify/${verificationCode}`);

export const forgotPassword = async (data: ForgotPasswordPayload) =>
  API.post("/auth/password/forgot", data);

export const resetPassword = async (data: ResetPasswordPayload) =>
  API.post("/auth/password/reset", data);

type SessionsResponse = {
  _id: string;
  userAgent: string;
  createdAt: string;
};

export const getSessions = async () => API.get<SessionsResponse>("/sessions");
