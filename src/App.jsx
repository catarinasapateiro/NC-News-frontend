import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlesDisplay from "./components/ArticlesDisplay";
import ArticleReaderDisplay from "./components/ArticleReaderDisplay";
import { AccountProvider } from "./components/AccountContext";
import { getArticles } from "./Api";
import { Routes, Route } from "react-router";
import CommentsDisplay from "./components/CommentsDisplay";
import CommentForm from "./components/CommentForm";

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
      });
  }, []);

  return (
    <>
      <AccountProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<ArticlesDisplay articlesDisplay={articlesDisplay} />}
          />
          <Route
            path="/:article_id"
            element={[<ArticleReaderDisplay />, <CommentsDisplay />]}
          />
          <Route
            path="/:article_id/comments/post"
            element={[<CommentForm />, <CommentsDisplay />]}
          />
        </Routes>
        <Footer />
      </AccountProvider>
    </>
  );
}

export default App;
