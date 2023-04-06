import axios from "axios";
import { useSelector } from "react-redux";
import { store } from "../redux/store";
// const baseURL = "http://192.168.2.106:3000/api/v1";
const baseURL = "http://192.168.2.103:3000/api/v1";
// const baseURL = "https://vibegardenss.herokuapp.com/api/v1";

export const apiRequest = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

// export const apiRequest = ({ ...options }) => {
//   const token = store.getState().user.token;
//   client.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
//   const onSuccess = (response) => response;
//   const onError = (error) => {
//     // catch errors
//     return error;
//   };
//   return client(options).then(onSuccess).catch(onError);
// };

apiRequest.interceptors.request.use(function (config) {
  const token = store.getState().user.token;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
