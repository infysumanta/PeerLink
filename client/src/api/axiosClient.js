import axios from "axios";
import queryString from "query-string";
import constant from "../util/constant";

const baseUrl = constant.BASE_URL;
const getToken = () => localStorage.getItem(constant.TOKEN_NAME);

const axiosClient = axios.create({
  baseURL: baseUrl,
  /* Converting the params to a query string. */
  paramsSerializer: {
    encode: queryString.parse,
    serialize: queryString.stringify,
  },
});

axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    if (!err.response) {
      return alert(err);
    }
    throw err.response;
  }
);

export default axiosClient;
