import newsLogo from "../../src/assets/newspaper.png";
import "./header.css";
import { Link } from "react-router";
import { useContext } from "react";
import { AccountContext } from "./AccountContext";
import loginAvatar from "../assets/logo.png";

function Header() {
  const { loggedInUser } = useContext(AccountContext);
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
        <Link to="/topic" className="nav-bar-text">
          Topics
        </Link>
        <span>
          <Link to="/topic" className="nav-bar-text">
            {loggedInUser.length > 0 ? loggedInUser[0].name : "Login"}
          </Link>
          <img className="login-avatar" src={loginAvatar} alt="login avatar" />
        </span>
      </nav>
    </>
  );
}

export default Header;
