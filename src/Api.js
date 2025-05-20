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
      console.log(res.data, "res.data");
      return res.data.article;
    })
    .catch((err) => {
      throw err;
    });
};
