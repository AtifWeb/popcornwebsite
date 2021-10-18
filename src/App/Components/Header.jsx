import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/img/logo.svg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import after_login from "../../Assets/img/after_login.jpg";
function Header() {
  return (
    <>
      <aside className="sidebar">
        <li>
          <Link>Find a cause</Link>
        </li>
        <li>
          <Link>Find a Borrower</Link>
        </li>

        <li>
          <Link>Portfolio</Link>
        </li>
        <li>
          <Link>My team</Link>
        </li>
        <li>
          <Link>Donations</Link>
        </li>
        <li>
          <Link>Settings</Link>
        </li>
        <li>
          <Link>Sign out</Link>
        </li>
      </aside>

      {/* // this is header */}
      <header className="Header  ">
        <div className="header-content w-1000 dflex-align-center">
          <img src={logo} alt="" />

          <div className="drop-down lend-wrapper">
            <div className="head dflex-align-center">
              <p>Lend</p>
              <ArrowDropDownIcon />
            </div>
            <ul className="body">
              <li>
                <Link>Find a cause</Link>
              </li>
              <li>
                <Link>Find a Borrower</Link>
              </li>
            </ul>
          </div>

          <form action="">
            <div className="input-wrapper dflex-align-center">
              <SearchIcon />
              <input type="text" placeholder="Search Here..." />
            </div>
          </form>

          <ul className="dflex-align-center">
            {/* <li>
              <Link>Borrow</Link>
            </li> */}
            <li className="drop-down lend-wrapper about-wrapper">
              <div className="head dflex-align-center">
                {" "}
                <div className="badge">$0</div>
                <img src={after_login} />
              </div>
              <ul className="body">
                <li>
                  <Link>Portfolio</Link>
                </li>
                <li>
                  <Link>My team</Link>
                </li>
                <li>
                  <Link>Donations</Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <Link>Sign out</Link>
                </li>
              </ul>
            </li>
            {/* 
            <li>
              <Link>Sign in</Link>
            </li> */}
          </ul>

          <div
            className="burger-icon"
            onClick={(e) => {
              document.querySelector(".sidebar").classList.toggle("active");
            }}
          >
            <MenuIcon />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
