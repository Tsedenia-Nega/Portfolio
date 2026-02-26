import axios from "axios";

const BaseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:5000/api";
const API = axios.create({
  baseURL: BaseUrl,
});
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;