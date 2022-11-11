import React from "react";
import classes from "./Inspo.module.css";
import Star from "../../assets/svgs/star.svg";

const Inspo = ({ ImageName }) => {
  return (
    <div className={classes.inspo}>
      <div className={classes.imageContainer}>
        <img src={ImageName} alt="inspo-pic" />
      </div>
      <div className={classes.box}>
        <p className={classes.text}>Desert king</p>
        <p className={(classes.text, classes.bold)}>1MBT per night</p>
      </div>
      <div className={classes.box}>
        <p className={classes.text}>2345km away</p>
        <p className={classes.text}>available for 2weeks stay</p>
      </div>
      <div className={classes.stars}>
        <div>
          <img src={Star} alt="star" />
        </div>
        <div>
          <img src={Star} alt="star" />
        </div>
        <div>
          <img src={Star} alt="star" />
        </div>
        <div>
          <img src={Star} alt="star" />
        </div>
        <div>
          <img src={Star} alt="star" />
        </div>
      </div>
    </div>
  );
};

export default Inspo;
