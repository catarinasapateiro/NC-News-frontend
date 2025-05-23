import "./css_components/articlesdisplay.css";
import MainArticlesDisplay from "./MainArticlesDisplay";
import SecondaryArticlesDisplay from "./SecondaryArticlesDisplay";
import { useState, useEffect } from "react";
import { getArticles } from "../Api";

function ArticlesDisplay() {
  const [mainArticlesDisplay, setMainArticlesDisplay] = useState([]);
  const [articlesDisplay, setArticlesDisplay] = useState([]);

  useEffect(() => {
    getArticles()
      .then((articles) => {
        const mainArticlesDisplay = [articles[0], articles[1], articles[8]];

        const articlesDisplay = [
          articles[2],
          articles[3],
          articles[4],
          articles[5],
          articles[6],
          articles[7],
        ];

        setArticlesDisplay(articlesDisplay);
        setMainArticlesDisplay(mainArticlesDisplay);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="articles-display">
      <MainArticlesDisplay mainArticlesDisplay={mainArticlesDisplay} />
      <SecondaryArticlesDisplay articlesDisplay={articlesDisplay} />
    </div>
  );
}
export default ArticlesDisplay;
