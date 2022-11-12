import React from "react";
import classes from "./Stay.module.css";
import Inspo from "../Inspo/Inspo";
import Stay1 from "../../assets/images/stay1.png";
import Stay2 from "../../assets/images/stay2.png";
import Stay3 from "../../assets/images/stay3.png";
import Stay4 from "../../assets/images/stay4.png";
import Stay5 from "../../assets/images/stay5.png";
import Stay6 from "../../assets/images/stay6.png";
import Stay7 from "../../assets/images/stay7.png";
import Stay8 from "../../assets/images/stay8.png";
import Stay9 from "../../assets/images/stay9.png";
import Stay10 from "../../assets/images/stay10.png";
import Stay11 from "../../assets/images/stay11.png";
import Stay12 from "../../assets/images/stay12.png";
import Stay13 from "../../assets/images/stay13.png";
import Stay14 from "../../assets/images/stay14.png";
import Stay15 from "../../assets/images/stay15.png";
import Stay16 from "../../assets/images/stay16.png";

const Stay = () => {
  return (
    <div className={classes.stay}>
      <div className={classes.container}>
        <Inspo ImageName={Stay1} />
        <Inspo ImageName={Stay2} />
        <Inspo ImageName={Stay3} />
        <Inspo ImageName={Stay4} />
        <Inspo ImageName={Stay5} />
        <Inspo ImageName={Stay6} />
        <Inspo ImageName={Stay7} />
        <Inspo ImageName={Stay8} />
        <Inspo ImageName={Stay9} />
        <Inspo ImageName={Stay10} />
        <Inspo ImageName={Stay11} />
        <Inspo ImageName={Stay12} />
        <Inspo ImageName={Stay13} />
        <Inspo ImageName={Stay14} />
        <Inspo ImageName={Stay15} />
        <Inspo ImageName={Stay16} />
      </div>
    </div>
  );
};

export default Stay;
