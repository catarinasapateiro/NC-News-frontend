import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlesDisplay from "./components/ArticlesDisplay";
import { getArticles } from "./Api";

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
      <Header />
      <div className="articles-display">
        <ArticlesDisplay articlesDisplay={articlesDisplay} />
      </div>
      <Footer />
    </>
  );
}

export default App;
