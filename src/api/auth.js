import { useMutation } from "react-query";
import { apiRequest } from "./axios";

const registerUser = async (user) => {
  return await apiRequest.post("/auth/register", user);
};
const verifyUser = async (data) => {
  return await apiRequest.patch("/auth/verifyUser", data);
};
const resendOtp = async (email) => {
  return await apiRequest.patch("/auth/resendOTP", email);
};
const login = async (data) => {
  return await apiRequest.post("/auth/login", data);
};
export const useRegisterUser = (onSuccess) => {
  return useMutation(registerUser, {
    onSuccess,
  });
};
export const useVerifyUser = (onSuccess) => {
  return useMutation(verifyUser, {
    onSuccess,
  });
};
export const useResendOtp = (onSuccess) => {
  return useMutation(resendOtp, {
    onSuccess,
  });
};
export const useLogin = (onSuccess) => {
  return useMutation(login, {
    onSuccess,
  });
};
