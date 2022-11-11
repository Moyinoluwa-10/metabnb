import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Inspiration from "../../Components/Inspiration/Inspiration";
import Nfts from "../../Components/Nfts/Nfts";
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
      <Nfts />
      <Footer />
    </>
  );
};

export default Home;
