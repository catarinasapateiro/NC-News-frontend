import newsLogo from "../../src/assets/newspaper.png";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <div className="header-div-1">
          <img src={newsLogo} id="logo" alt="NC News Logo" />
          <h1>Nc News</h1>
        </div>
        <div className="header-div-2">
          <button className="search-button">
            <i className="glyphicon glyphicon-search" id="search" />
          </button>
          <input type="text" placeholder="   search" className="search-input" />
        </div>
      </header>
      <nav>
        <p className="nav-bar-text">Home</p>
        <p className="nav-bar-text">Topics</p>
        <p className="nav-bar-text">Login</p>
      </nav>
    </>
  );
}

export default Header;
