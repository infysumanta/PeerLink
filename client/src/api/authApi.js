import apiClient from "./axiosClient";

const authApi = {
  signup: (params) => apiClient.post("/auth/register", params),
  login: (params) => apiClient.post("/auth/login", params),
};

export default authApi;
