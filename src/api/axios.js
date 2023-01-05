import axios from "axios";
const baseURL = "http://192.168.100.29:3000/api/v1";

export const apiRequest = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});
