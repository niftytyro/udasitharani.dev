import React, { useContext } from "react";
import AppReferenceContext from "../../context/AppReferenceContext";
import Covid19TrackerIMG from "../../static/project screenshots/Covid-19 Tracker.png";
import BakBakChatAppIMG from "../../static/project screenshots/BakBak ChatApp.jpg";
import MovieBookingAppIMG from "../../static/project screenshots/Movie Booking App.jpg";
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
        <ProjectTile
          projectID="bakbak-chatapp"
          projectIMG={BakBakChatAppIMG}
          projectURL=""
          projectDescription="Made with Flutter and Firebase."
          projectTitle="Chat App"
        />
        <ProjectTile
          projectID="movie-booking-app"
          projectIMG={MovieBookingAppIMG}
          projectURL="../../static/project screenshots/movie_2.0_demo_mockup.mp4"
          projectDescription="Made with Flutter and ❤️. Designed by Dimest C."
          projectTitle="Movie Booking App"
        />
      </div>
    </div>
  );
};

export default MyWork;
