import apiClient from "./axiosClient";

const userApi = {
  getUser: () => apiClient.get("/users/user"),
};

export default userApi;
