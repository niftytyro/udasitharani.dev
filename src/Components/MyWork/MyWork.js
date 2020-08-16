import React, { useContext } from "react";
import AppReferenceContext from "../../context/AppReferenceContext";
import Covid19TrackerIMG from "../../static/project screenshots/Covid-19 Tracker.png";
import ProjectTile from "../ProjectTile/ProjectTile";
import styles from "./MyWork.module.css";

const MyWork = () => {
  const { MyWorkRef } = useContext(AppReferenceContext);

  return (
    <div className={styles.myWork} ref={MyWorkRef}>
      <div className={styles.myWorkHeader}>My Work</div>
      <div className={styles.projects}>
        <ProjectTile
          projectID="covid-19-tracker"
          projectIMG={Covid19TrackerIMG}
          projectURL="https://udasitharani.github.io/Covid-19-Tracker"
          projectDescription="Made with Reactjs and disease.sh API."
          projectTitle="Covid-19 Tracker"
        />
      </div>
    </div>
  );
};

export default MyWork;
