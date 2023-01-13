import apiClient from "./axiosClient";

const authApi = {
  createComment: (params) => apiClient.post("/comments/create", params),
  deleteComment: (params) => apiClient.delete("/comments/delete", params),
  getCommentByPost: (post_id) => apiClient.post(`/comments/${post_id}`),
};

export default authApi;
