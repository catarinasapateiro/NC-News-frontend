import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlesDisplay from "./components/ArticlesDisplay";
import ArticleReaderDisplay from "./components/ArticleReaderDisplay";
import { getArticles } from "./Api";
import { Routes, Route } from "react-router";
import CommentsDisplay from "./components/CommentsDisplay";


function App() {
  const [articlesDisplay, setArticlesDisplay] = useState([]);

  useEffect((articlesDisplay) => {
    getArticles()
      .then((articles) => {
        const articlesDisplay = [
          articles[0],
          articles[1],
          articles[2],
          articles[3],
          articles[4],
          articles[5],
        ];
        setArticlesDisplay(articlesDisplay);
      })
      .catch((err) => {
        console.log(err);
      }),
      [];
  });

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ArticlesDisplay articlesDisplay={articlesDisplay} />}
        />
        <Route path="/:article_id" element={<ArticleReaderDisplay />} />
        <Route path="/:article_id/comments" element={<CommentsDisplay />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
