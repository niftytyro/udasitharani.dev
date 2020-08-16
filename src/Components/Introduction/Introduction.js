import React, { useContext } from "react";
import AppReferenceContext from "../../context/AppReferenceContext";
import ContactButton from "../ContactButton/ContactButton";
// import backgroundImage from "../../static/background.jpeg";
import styles from "./Introduction.module.css";
import { motion } from "framer-motion";

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
          src="https://unsplash.com/photos/VieM9BdZKFo/download?force=true&w=2400"
          alt="Software Developer Workspace"
        />
      </div>
      <div className={styles.shortIntroContainer}>
        <div className={styles.shortIntro}>
          <motion.div
            animate={{ translateY: "-20px", opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.shortTitle}
          >
            I'm Udasi Tharani.
          </motion.div>
          <motion.div
            animate={{ translateY: "-20px", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={styles.shortDescription}
          >
            A freelance software developer working on great web apps with
            startups, companies, and teams across the globe.
          </motion.div>
        </div>
        <ContactButton text="Let's Talk" handleClick={scrollToAbout} />
      </div>
    </div>
  );
};

export default Introduction;
