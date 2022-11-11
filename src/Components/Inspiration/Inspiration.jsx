import React from "react";
import classes from "./Inspiration.module.css";
import Inspo from "../Inspo/Inspo";
import Inspo1 from "../../assets/images/inspo1.png";
import Inspo2 from "../../assets/images/inspo2.png";
import Inspo3 from "../../assets/images/inspo3.png";
import Inspo4 from "../../assets/images/inspo4.png";
import Inspo5 from "../../assets/images/inspo5.png";
import Inspo6 from "../../assets/images/inspo6.png";
import Inspo7 from "../../assets/images/inspo7.png";
import Inspo8 from "../../assets/images/inspo8.png";

const Inspiration = () => {
  return (
    <div className={classes.inspiration}>
      <h1>Inspiration for your next adventure</h1>
      <div className={classes.container}>
        <Inspo ImageName={Inspo1} />
        <Inspo ImageName={Inspo2} />
        <Inspo ImageName={Inspo3} />
        <Inspo ImageName={Inspo4} />
        <Inspo ImageName={Inspo5} />
        <Inspo ImageName={Inspo6} />
        <Inspo ImageName={Inspo7} />
        <Inspo ImageName={Inspo8} />
      </div>
    </div>
  );
};

export default Inspiration;
