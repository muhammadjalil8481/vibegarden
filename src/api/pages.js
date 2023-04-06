import { useQuery } from "react-query";
import { apiRequest } from "./axios";

const homepageLO = async () => {
  return await apiRequest.get("/homepage");
};
const homepageLI = async () => {
  return await apiRequest.get("/homepageLoggedIn");
};

export const useHomepageLO = () => {
  return useQuery("homepage-lo", homepageLO);
};
export const useHomepageLI = () => {
  return useQuery("homepage-li", homepageLI);
};
