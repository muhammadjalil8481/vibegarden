import { useMutation, useQuery } from "react-query";
import { apiRequest } from "./axios";

const user = async (id) => {
  console.log("refetch id", id);
  return await apiRequest.get(`/getUser/${id}`);
};
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
export const useUser = (id, enabled = true, onSuccess) => {
  return useQuery(["user", id], () => user(id), {
    onSuccess,
    enabled,
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
