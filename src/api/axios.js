import axios from "axios";
import { useSelector } from "react-redux";
import { store } from "../redux/store";
const baseURL = "http://192.168.100.29:3000/api/v1";
// const baseURL = "https://vibegardenss.herokuapp.com/api/v1";

export const apiRequest = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

apiRequest.interceptors.request.use(function (config) {
  const token = store.getState().user.token;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
