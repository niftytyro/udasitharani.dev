import React from "react";
import styles from "./SocialLink.module.css";

function SocialLink({ imgSrc, to }) {
  return (
    <div className={styles.linkIcons}>
      <a href={to}>
        <img src={imgSrc} alt="" />
      </a>
    </div>
  );
}

export default SocialLink;
