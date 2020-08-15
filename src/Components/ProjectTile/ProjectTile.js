import React from "react";
import styles from "./ProjectTile.module.css";

function ProjectTile({
  projectID,
  projectIMG,
  projectURL,
  projectDescription,
}) {
  return (
    <div id={projectID} className={styles.projectTile}>
      <div className={styles.projectImage}>
        <a href={projectURL}>
          <img src={projectIMG} alt="" />
        </a>
      </div>
      <div className={styles.projectDetails}>
        <p>{projectDescription}</p>
      </div>
    </div>
  );
}

export default ProjectTile;
