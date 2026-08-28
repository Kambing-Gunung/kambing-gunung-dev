import paper from "@/assets/images/featured-projects/project-paper.png";
import descriptionFrame from "@/assets/images/featured-projects/project-description.png";

import Divider from "@/components/ui/Divider";

import type { FeaturedProject } from "@/types/project";

import styles from "./ProjectPaper.module.css";

type ProjectPaperProps = {
  project: FeaturedProject;
  onClick: () => void;
};

function ProjectPaper({
  project,
  onClick,
}: ProjectPaperProps) {
  return (
    <article
      className={styles.projectItem}
      onClick={onClick}
    >
      <img
        src={paper}
        alt=""
        className={styles.paper}
      />

      <div className={styles.paperContent}>
        <span>{project.category}</span>

        <h3>{project.name}</h3>

        <p>{project.status}</p>
      </div>

      <div className={styles.hoverDetail}>
        <img
          src={descriptionFrame}
          alt=""
          className={styles.descriptionFrame}
        />

        <div className={styles.hoverContent}>
          <h4>{project.name}</h4>

          <span>{project.category}</span>

          <Divider variant="default" />

          <p>{project.description}</p>

          <div className={styles.technologies}>
            {project.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectPaper;