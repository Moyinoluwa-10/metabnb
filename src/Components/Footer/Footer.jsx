import React from "react";
import classes from "./Footer.module.css";
import FooterLogo from "../../assets/svgs/footerlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <div className={classes["image-container"]}>
          <img src={FooterLogo} alt="" />
        </div>
        <div className={classes.socials}>
          <div>
            <Link to={"/"}>
              <FontAwesomeIcon icon={faFacebook} className="icons" />
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <FontAwesomeIcon icon={faInstagram} className="icons" />
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <FontAwesomeIcon icon={faTwitter} className="icons" />
            </Link>
          </div>
        </div>
        <p className={classes.text}>&copy; 2022 Metabnb</p>
      </div>
      <div>
        <p>Community</p>
        <ul>
          <li>
            <Link to={"/"}>NFT</Link>
          </li>
          <li>
            <Link to={"/"}>Tokens</Link>
          </li>
          <li>
            <Link to={"/"}>Landlords</Link>
          </li>
          <li>
            <Link to={"/"}>Discord</Link>
          </li>
        </ul>
      </div>
      <div>
        <p>Places</p>
        <ul>
          <li>
            <Link to={"/"}>Castle</Link>
          </li>
          <li>
            <Link to={"/"}>Farm</Link>
          </li>
          <li>
            <Link to={"/"}>Beach</Link>
          </li>
          <li>
            <Link to={"/"}>Learn more</Link>
          </li>
        </ul>
      </div>
      <div>
        <p>About us</p>
        <ul>
          <li>
            <Link to={"/"}>Roadmap</Link>
          </li>
          <li>
            <Link to={"/"}>Creators</Link>
          </li>
          <li>
            <Link to={"/"}>Career</Link>
          </li>
          <li>
            <Link to={"/"}>Contact us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
