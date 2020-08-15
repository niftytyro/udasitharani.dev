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
        <img src={projectIMG} alt={projectTitle} />
      </a>
      <div className={styles.projectDetails}>
        <p>{projectDescription}</p>
      </div>
    </div>
  );
}

export default ProjectTile;
