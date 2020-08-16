import React, { useContext } from "react";
import AppReferenceContext from "../../context/AppReferenceContext";
import ContactButton from "../ContactButton/ContactButton";
import backgroundImage from "../../static/background.jpeg";
import styles from "./Introduction.module.css";

const Introduction = () => {
  const { AboutMeRef } = useContext(AppReferenceContext);

  const scrollToAbout = (event) => {
    console.log(AboutMeRef.current.offsetTop);
    window.scrollTo(0, AboutMeRef.current.offsetTop);
  };

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
        <ContactButton text="Let's Talk" handleClick={scrollToAbout} />
      </div>
    </div>
  );
};

export default Introduction;
