import apiClient from "./axiosClient";

const commentApi = {
  createComment: (params) => apiClient.post("/comments/create", params),
  deleteComment: (params) => apiClient.delete("/comments/delete", params),
  getCommentByPost: (post_id) => apiClient.get(`/comments/${post_id}`),
};

export default commentApi;
