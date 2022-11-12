import React from "react";
import classes from "./WalletModal.module.css";
import Lion from "../../assets/svgs/lion.svg";
import Wallet from "../../assets/svgs/wallet.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faClose } from "@fortawesome/free-solid-svg-icons";

const WalletModal = ({ handleRemoveModal, handleShowModal }) => {
  return (
    <div className={classes.walletmodal}>
      <div className={classes.overlay} onClick={handleRemoveModal}></div>
      <div className={classes.container}>
        <div className={classes["top-section"]}>
          <h3>Connect Wallet</h3>
          <div>
            <FontAwesomeIcon
              icon={faClose}
              className={classes.icon}
              onClick={handleRemoveModal}
            />
          </div>
        </div>
        <p>Choose your preferred wallet</p>
        <div className={classes["bottom-section"]}>
          <div className={classes.box}>
            <div className={classes.text}>
              <img src={Lion} alt="lion-logo" />
              Metamask
            </div>
            <div>
              <FontAwesomeIcon icon={faAngleRight} className={classes.icon} />
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.text}>
              <img src={Wallet} alt="wallet-logo" />
              WalletConnect
            </div>
            <div>
              <FontAwesomeIcon icon={faAngleRight} className={classes.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
