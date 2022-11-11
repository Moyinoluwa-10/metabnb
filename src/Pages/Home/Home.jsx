import React from "react";
import Header from "../../Components/Header/Header";
import Inspiration from "../../Components/Inspiration/Inspiration";
import Rent from "../../Components/Rent/Rent";
import Sponsor from "../../Components/Sponsor/Sponsor";
// import classes from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <Rent />
      <Sponsor />
      <Inspiration />
    </>
  );
};

export default Home;
