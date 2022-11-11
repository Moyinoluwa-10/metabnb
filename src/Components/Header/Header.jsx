import React, { useState } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import MetabnbLogo from "../../assets/svgs/logo.svg";

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const handleClick = () => {
    setResponsive(!responsive);
  };

  return (
    <div
      className={
        responsive ? (classes.headerpage, classes.active) : classes.headerpage
      }
    >
      <header
        className={
          responsive ? (classes.header, classes.active) : classes.header
        }
      >
        <div className={classes.headerContainer}>
          <div className={classes.logoContainer}>
            <img src={MetabnbLogo} alt="Metabnb Logo" />
          </div>

          <div
            className={
              responsive
                ? (classes.hamburger, classes.active)
                : classes.hamburger
            }
            onClick={handleClick}
          >
            <span className={classes.line}></span>
            <span className={classes.line}></span>
            <span className={classes.line}></span>
          </div>

          <div className={classes.navBtn}>
            <ul className={classes.headerLink}>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/place"}>Place to stay</Link>
              </li>
              <li>
                <Link to={"/"}>NFTs</Link>
              </li>
              <li>
                <Link to={"/"}>Community</Link>
              </li>
            </ul>
          </div>

          <div className={classes.navLinkBox}>
            <ul className={classes.navLink}>
              <li>
                <Link to={"/"} className={classes.btn}>
                  Connect wallet
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
