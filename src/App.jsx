import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlesDisplay from "./components/ArticlesDisplay";
import ArticleReaderDisplay from "./components/ArticleReaderDisplay";
import { AccountProvider } from "./components/AccountContext";
import { Routes, Route } from "react-router";
import CommentsDisplay from "./components/CommentsDisplay";
import CommentForm from "./components/CommentForm";
import ArticlesDisplayByTopic from "./components/ArticlesDisplayByTopic";

function App() {
  return (
    <>
      <AccountProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesDisplay />} />
          <Route path="/topics/:topic" element={<ArticlesDisplayByTopic />} />

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
