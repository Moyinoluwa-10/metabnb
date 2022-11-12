import React, { useState } from "react";
import classes from "./Rent.module.css";
import Rent1 from "../../assets/images/rent1.png";
import Rent2 from "../../assets/images/rent2.png";
import Rent3 from "../../assets/images/rent3.png";
import Rent4 from "../../assets/images/rent4.png";

const Rent = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.rent}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h1>
            Rent a <span> Place </span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>

          <p>
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone.
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="search"
                placeholder="Search for location"
                value={search}
                onChange={handleChange}
              />
              <button>Search</button>
            </div>
          </form>
        </div>

        <div className={classes.right}>
          <div className={classes.cont1}>
            <div className={classes["image-container"]}>
              <img src={Rent1} alt="pic1" />
            </div>
            <div className={classes["image-container"]}>
              <img src={Rent2} alt="pic2" />
            </div>
          </div>
          <div className={classes.cont2}>
            <div className={classes["image-container"]}>
              <img src={Rent3} alt="pic3" />
            </div>
            <div className={classes["image-container"]}>
              <img src={Rent4} alt="pic4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;
