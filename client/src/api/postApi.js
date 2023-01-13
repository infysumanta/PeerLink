import apiClient from "./axiosClient";

const postApi = {
  createPost: (params) => apiClient.post("/posts/create", params),
  deletePost: (params) => apiClient.post("/posts/delete", params),
  getUserPost: (params) =>
    apiClient.get("/posts/get-user-post/:userId", params),
  getFeedPost: (params) => apiClient.get("/posts/get-feed-post", params),
  getSinglePost: (postId) => apiClient.get(`/posts/get-single-post/${postId}`),
  likePost: (params) => apiClient.post("/posts/like-post", params),
  dislikePost: (params) => apiClient.post("/posts/dislike-post", params),
};

export default postApi;
