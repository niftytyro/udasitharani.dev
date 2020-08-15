import React from "react";
import Covid19TrackerIMG from "../../static/project screenshots/Covid-19 Tracker.png";
import ProjectTile from "../ProjectTile/ProjectTile";
import styles from "./MyWork.module.css";

const MyWork = () => {
  return (
    <div className={styles.myWork}>
      <div className={styles.myWorkHeader}>My Work</div>
      <div className={styles.projects}>
        <ProjectTile
          projectID="covid-19-tracker"
          projectIMG={Covid19TrackerIMG}
          projectURL="https://udasitharani.github.io/Covid-19-Tracker"
          projectDescription="A Covid-19-Tracker made with Reactjs."
        />
        <ProjectTile
          projectID="covid-19-tracker"
          projectIMG={Covid19TrackerIMG}
          projectURL="https://udasitharani.github.io/Covid-19-Tracker"
          projectDescription="A Covid-19-Tracker made with Reactjs."
        />
      </div>
    </div>
  );
};

export default MyWork;
