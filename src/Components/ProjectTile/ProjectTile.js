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
      <a href={projectURL} target="_blank" rel="noopener noreferrer">
        <img src={projectIMG} alt={projectTitle} />
        <div className={styles.projectTitle}>{projectTitle}</div>
        <div className={styles.projectDetails}>
          <p>{projectDescription}</p>
        </div>
      </a>
    </div>
  );
}

export default ProjectTile;
