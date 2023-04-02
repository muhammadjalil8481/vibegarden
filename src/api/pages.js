import { useQuery } from "react-query";
import { apiRequest } from "./axios";

const homepageLO = async () => {
  return await apiRequest.get("/homepage");
};

export const useHomepageLO = () => {
  return useQuery("homepage-lo", homepageLO);
};
