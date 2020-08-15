import React from "react";
import styles from "./ProjectTile.module.css";

function ProjectTile({
  projectID,
  projectIMG,
  projectURL,
  projectDescription,
  projectTitle,
}) {
  return (
    <div id={projectID} className={styles.projectTile}>
      <a href={projectURL}>
        <div className={styles.projectImage}>
          <img src={projectIMG} alt={projectTitle} />
        </div>
        <div className={styles.projectDetails}>
          <p>{projectDescription}</p>
        </div>
      </a>
    </div>
  );
}

export default ProjectTile;
