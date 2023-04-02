import { useMutation } from "react-query";
import { apiRequest } from "./axios";

const selectAvatar = async (data) => {
  const { userid, choice } = data;
  return await apiRequest.patch(`/updateUserAvatar/${userid}`, {
    avatar: choice,
  });
};
const selectBloom = async (data) => {
  const { userid, choice } = data;
  return await apiRequest.patch(`/updateUserBloom/${userid}`, {
    bloom: choice,
  });
};
const bloomPercentage = async (data) => {
  const { userid, percent } = data;
  return await apiRequest.patch(`/updateBloomPercentage/${userid}`, {
    bloomPercentage: percent,
  });
};
export const useSelectAvatar = (onSuccess) => {
  return useMutation(selectAvatar, {
    onSuccess,
  });
};
export const useSelectBloom = (onSuccess) => {
  return useMutation(selectBloom, {
    onSuccess,
  });
};

export const useBloomPercentage = (onSuccess) => {
  return useMutation(bloomPercentage, {
    onSuccess,
  });
};
