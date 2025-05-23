import "./articlesdisplay.css";
import MainArticlesDisplay from "./MainArticlesDisplay";
import SecondaryArticlesDisplay from "./SecondaryArticlesDisplay";

function ArticlesDisplay({ articlesDisplay, mainArticlesDisplay }) {
  return (
    <div className="articles-display">
      <MainArticlesDisplay mainArticlesDisplay={mainArticlesDisplay} />
      <SecondaryArticlesDisplay articlesDisplay={articlesDisplay} />
    </div>
  );
}
export default ArticlesDisplay;
