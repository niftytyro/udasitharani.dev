import React from "react";
import DownArrow from "../../static/down-arrow.svg";
import styles from "./ContactButton.module.css";

function ContactButton() {
  return (
    <div className={styles.button}>
      <img src={DownArrow} alt="Let's Talk" />
    </div>
  );
}

export default ContactButton;
