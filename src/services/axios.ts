import Axios from "axios";

const BASE_URL = "https://veocab-project.vercel.app/api/v1";

const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error;
   
    return Promise.reject(error);
  }
);

export default axios;
