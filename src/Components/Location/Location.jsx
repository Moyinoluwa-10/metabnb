import React from "react";
import classes from "./Location.module.css";
import Settings from "../../assets/svgs/setting.svg";

const Location = () => {
  return (
    <div className={classes.location}>
      <div className={classes.wrapper}>
        <p>Restaurant</p>
        <p>Cotagge</p>
        <p>Castle</p>
        <p>Fantast city</p>
        <p>Beach</p>
        <p>Cabins</p>
        <p>Off-grid</p>
        <p>Farm</p>
        <div className={classes.box}>
          Location <img src={Settings} alt="settings" />
        </div>
      </div>
    </div>
  );
};

export default Location;
