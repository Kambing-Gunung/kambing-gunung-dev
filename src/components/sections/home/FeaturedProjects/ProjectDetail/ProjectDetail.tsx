import { useState } from "react";

import styles from "./ProjectDetail.module.css";
import type { FeaturedProject } from "@/types/project";

import detailFrame from "@/assets/images/featured-projects/project-detail-frame.png";

type ProjectDetailProps = {
  project: FeaturedProject;
  onClose: () => void;
};

function ProjectDetail({
  project,
  onClose,
}: ProjectDetailProps) {
  const [activeImage, setActiveImage] = useState(0);

  const currentImage = project.gallery[activeImage];

  return (
    <div
      className={styles.detail}
      onClick={onClose}
    >
      <div
        className={styles.container}
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={detailFrame}
          alt=""
          className={styles.frame}
        />

        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close project detail"
        >
          &lt;
        </button>

        <div className={styles.content}>

          {/* LEFT */}
          <div className={styles.info}>

            <div className={styles.heading}>
              <span className={styles.category}>
                {project.category}
              </span>

              <h3 className={styles.title}>
                {project.name}
              </h3>
            </div>

            <p className={styles.description}>
              {project.description}
            </p>

            <div className={styles.meta}>

              <div className={styles.metaGroup}>
                <span className={styles.metaLabel}>
                  Development Status
                </span>

                <span className={styles.status}>
                  <span className={styles.statusDot} />
                  {project.status}
                </span>
              </div>

              <div className={styles.metaGroup}>
                <span className={styles.metaLabel}>
                  Role
                </span>

                <span className={styles.metaValue}>
                  Solo Developer
                </span>
              </div>

            </div>

            <div className={styles.techGroup}>
              <span className={styles.metaLabel}>
                Technologies
              </span>

              <div className={styles.technologies}>
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.href}
              className={styles.cta}
              onClick={(event) => event.stopPropagation()}
            >
              View Project
              <span>→</span>
            </a>

          </div>

          {/* RIGHT */}
          <div className={styles.gallery}>

            <div className={styles.mainImage}>
              {currentImage && (
                <img
                  src={project.gallery[activeImage]}
                  alt={`${project.name} screenshot ${activeImage + 1}`}
                  className={styles.mainImageContent}
                />
              )}
            </div>

            <div className={styles.thumbnails}>
              {project.gallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={`${styles.thumbnail} ${index === activeImage
                      ? styles.activeThumbnail
                      : ""
                    }`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View screenshot ${index + 1}`}
                  aria-current={
                    index === activeImage
                      ? "true"
                      : undefined
                  }
                >
                  <img
                    src={image}
                    alt=""
                    className={styles.thumbnailImage}
                  />
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;