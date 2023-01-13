import apiClient from "./axiosClient";

const postApi = {
  createPost: (params) => apiClient.post("/posts/create", params),
  deletePost: (params) => apiClient.post("/posts/delete", params),
  getUserPost: (params) =>
    apiClient.post("/posts/get-user-post/:userId", params),
  getFeedPost: (params) => apiClient.post("/posts/get-feed-post", params),
  getSinglePost: (params) =>
    apiClient.post("/posts/get-single-post/:userId", params),
  likePost: (params) => apiClient.post("/posts/like-post", params),
  dislikePost: (params) => apiClient.post("/posts/dislike-post", params),
};

export default postApi;
