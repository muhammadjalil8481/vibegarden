import { useQuery } from "react-query";
import { apiRequest } from "./axios";

const avatars = async () => {
  return await apiRequest.get("/getAllAvatars");
};

export const useAvatars = () => {
  return useQuery("avatars", avatars);
};
