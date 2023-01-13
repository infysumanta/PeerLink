import apiClient from "./axiosClient";

const userApi = {
  getUser: () => apiClient.get("/users/user"),
  getUserDetails: () => apiClient.get("/users/get-user-details"),
  getUserDetailsByUsername: () =>
    apiClient.get("/users/get-user-details/:username"),
  getUserListBySearch: () => apiClient.get("/users/get-user-list-search"),
  getFriendList: () => apiClient.get("/users/get-user-friends-list/:user_id"),
  getAboutDetails: () => apiClient.get("/users/get-about-details/:user_id"),
  getUserNotifications: () =>
    apiClient.get("/users/get-user-notification-list"),
  sendFriendRequest: () => apiClient.post("/users/send-friend-request"),
  cancelFriendRequest: () => apiClient.post("/users/cancel-friend-request"),
  confirmFriendRequest: () => apiClient.post("/users/confirm-friend-request"),
  updateUserDetails: () => apiClient.put("/users/update-user-details"),
  readOneNotification: () => apiClient.post("/users/read-one-notification"),
  readAllNotification: () =>
    apiClient.post("/users/marked-all-notification-as-read"),
};

export default userApi;
