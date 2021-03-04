import axios from "axios";
import store from "../store";

const axiosInstance = axios.create({
  baseURL: "https://apt-booking-api.herokuapp.com/"
});
axiosInstance.interceptors.request.use(
  config => {
    // const { token } = store.state;
    console.log(store.state.user.token);
    if (store.state.user.token) {
      config.headers.Authorization = `Bearer ${store.state.user.token}`;
    }

    return config;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
