import React from "react";
import DownArrow from "../../static/down-arrow.svg";
import styles from "./ContactButton.module.css";

function ContactButton({ text, handleClick }) {
  return (
    <div onClick={handleClick} className={styles.button}>
      <div className={styles.text}>{text}</div>
      <img src={DownArrow} alt="Let's Talk" />
    </div>
  );
}

export default ContactButton;
