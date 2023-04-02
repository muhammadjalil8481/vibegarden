import { useMutation } from "react-query";
import { apiRequest } from "./axios";

const subscribeEmail = async (email) => {
  return await apiRequest.patch("/subscribeEmail", {
    email,
  });
};

export const useSubscribeEmail = (onSuccess) => {
  return useMutation(subscribeEmail, {
    onSuccess,
  });
};
