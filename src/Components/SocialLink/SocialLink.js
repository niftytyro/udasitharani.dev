import React from "react";
import styles from "./SocialLink.module.css";

function SocialLink({ imgSrc, to, platformName }) {
  return (
    <div className={styles.linkIcons}>
      <a href={to}>
        <img src={imgSrc} alt={"Udasi Tharani - " + platformName} />
      </a>
    </div>
  );
}

export default SocialLink;
