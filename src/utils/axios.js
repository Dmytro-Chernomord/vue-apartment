import axios from "axios";
// import store from "../store";

const axiosInstance = axios.create({
  baseURL: "https://apt-booking-api.herokuapp.com/"
});
axiosInstance.interceptors.request.use(
  config => {
    // config.headers = { "Access-Control-Allow-Origin": "*" };
    // const { token } = store?.state?.auth;

    // if (store?.state?.auth?.token) {
    //   config.headers.Authorization = `Bearer ${store?.state?.auth?.token}`;
    // }

    return config;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
