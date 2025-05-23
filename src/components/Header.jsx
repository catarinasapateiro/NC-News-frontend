import newsLogo from "../../src/assets/newspaper.png";
import "./css_components/header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AccountContext } from "./AccountContext";
import loginAvatar from "../assets/logo.png";

function Header() {
  const { loggedInUser } = useContext(AccountContext);
  const navigate = useNavigate();

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
        <Link to="/" className="nav-bar-text">
          Home
        </Link>

        <div className="custom-select">
          <label htmlFor="topics" className="nav-bar-text"></label>
          <select
            className="select-input"
            name="topics"
            id="topics"
            onChange={(e) => navigate(e.target.value)}
            defaultValue=""
          >
            <option value="select topic">Select topic</option>
            <option value="/topics/coding">Coding</option>
            <option value="/topics/football">Football</option>
            <option value="/topics/cooking">Cooking</option>
          </select>
          <span className="custom-arrow"></span>
        </div>

        <span>
          <Link to="/topic" className="nav-bar-text">
            <div className="icon-container">
              <i className="fas fa-user"></i>
            </div>
            {loggedInUser.length > 0 ? loggedInUser[0].name : "Login"}
          </Link>
        </span>
      </nav>
    </>
  );
}

export default Header;
