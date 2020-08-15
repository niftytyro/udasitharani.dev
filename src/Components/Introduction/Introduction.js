import React from "react";
import backgroundImage from "../../static/background.jpeg";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className={styles.backgroundImageContainer}>
        <img
          className={styles.backgroundImage}
          src={backgroundImage}
          alt="Software Developer Workspace"
        />
      </div>
      <div className={styles.shortIntroContainer}>
        <div className={styles.shortIntro}>
          <div className={styles.shortTitle}>I'm Udasi Tharani.</div>
          <div className={styles.shortDescription}>
            A freelance software developer working on great web apps with
            startups, companies, and teams across the globe.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
