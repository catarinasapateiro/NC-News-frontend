import axios from "axios";

const NcNewsApi = axios.create({
  baseURL: "https://nc-news-cs.onrender.com",
});

export const getArticles = () => {
  return NcNewsApi.get("/api/articles").then((res) => {
    return res.data.articles;
  });
};
