import axios from "axios";

const NcNewsApi = axios.create({
  baseURL: "https://nc-news-cs.onrender.com",
});

export const getArticles = () => {
  return NcNewsApi.get("/api/articles").then((res) => {
    return res.data.articles;
  });
};

export const getArticlesByArticleId = (articleId) => {
  return NcNewsApi.get(`/api/articles/${articleId}`)
    .then((res) => {
      return res.data.article;
    })
    .catch((err) => {
      throw err;
    });
};

export const getCommentsByArticleId = (articleId) => {
  return NcNewsApi.get(`/api/articles/${articleId}/comments`)
    .then((res) => {
      return res.data.comments;
    })
    .catch((err) => {
      throw err;
    });
};

export const patchArticleVotes = (article_id, number) => {
  return NcNewsApi.patch(`/api/articles/${article_id}`, {
    article_id: article_id,
    inc_votes: number,
  });
};

export const postComment = (article_id, username, commentText) => {
  return NcNewsApi.post(`/api/articles/${article_id}/comments`, {
    username: username,
    body: commentText,
  });
};

export const deleteComment = (comment_id) => {
  return NcNewsApi.delete(`/api/comments/${comment_id}`);
};
