import { useQuery } from "react-query";
import { apiRequest } from "./axios";

const blooms = async () => {
  return await apiRequest.get("/getAllBlooms");
};

export const useBlooms = () => {
  return useQuery("blooms", blooms);
};
