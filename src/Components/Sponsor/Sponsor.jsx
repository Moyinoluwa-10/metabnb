import React from "react";
import classes from "./Sponsor.module.css";
import MBToken from "../../assets/svgs/mbtoken.svg";
import Metamask from "../../assets/svgs/metamask.svg";
import Opensea from "../../assets/svgs/opensea.svg";

const Sponsor = () => {
  return (
    <div className={classes.sponsor}>
      <div>
        <img src={MBToken} alt="mbtoken-logo" />
      </div>
      <div>
        <img src={Metamask} alt="metamask-logo" />
      </div>
      <div>
        <img src={Opensea} alt="opensea-logo" />
      </div>
    </div>
  );
};

export default Sponsor;
