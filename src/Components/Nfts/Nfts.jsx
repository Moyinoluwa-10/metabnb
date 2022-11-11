import React from "react";
import classes from "./Nfts.module.css";
import { Link } from "react-router-dom";
import Nft1 from "../../assets/images/nft1.png";
import Nft2 from "../../assets/images/nft2.png";
import Nft3 from "../../assets/images/nft3.png";

const Nfts = () => {
  return (
    <div className={classes.nfts}>
      <div className={classes.left}>
        <h1>Metabnb NFTs</h1>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <Link to={"/"}>Learn more</Link>
      </div>
      <div className={classes.right}>
        <div className={`${classes.imageContainer} ${classes.container1}`}>
          <img src={Nft1} alt="nft-pic" />
        </div>
        <div className={`${classes.imageContainer} ${classes.container2}`}>
          <img src={Nft2} alt="nft-pic" />
        </div>
        <div className={[classes.imageContainer, classes.container3].join(" ")}>
          <img src={Nft3} alt="nft-pic" />
        </div>
      </div>
    </div>
  );
};

export default Nfts;
