import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8080/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// // Add a request interceptor
// axoisClient.interceptors.request.use(function (config) {
//       config.headers.Authorization = null;
//     return config;
//   });

export default axiosClient;
