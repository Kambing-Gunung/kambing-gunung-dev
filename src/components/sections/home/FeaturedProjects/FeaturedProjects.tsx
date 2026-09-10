import { useState } from "react";

import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";

import skyCity from "@/assets/images/featured-projects/featured-projects-sky.png";
import board from "@/assets/images/featured-projects/featured-projects-board.png";

import Divider from "@/components/ui/Divider";

import ProjectPaper from "./ProjectPaper/ProjectPaper";
import ProjectDetail from "./ProjectDetail/ProjectDetail";

import { home } from "@/content/home";

import styles from "./FeaturedProjects.module.css";

function FeaturedProjects() {
  const { featuredProjects } = home;

  const [selectedProjectId, setSelectedProjectId] =
    useState<string | null>(null);

  const selectedProject =
    featuredProjects.projects.find(
      (project) => project.id === selectedProjectId
    );

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  return (
    <Section as="section" size="lg" className={styles.featuredProjects}>
      <Container as="div" size="xl">
        <div className={styles.scene}>

          {/* SKY */}
          <div className={styles.skyLayer}>
            <img src={skyCity} alt="" />
          </div>

          {/* HEADER */}
          <div className={styles.projectHeader}>
            <span className={styles.projectEyebrow}>
              {featuredProjects.kicker}
            </span>

            <h2 className={styles.projectTitle}>
              {featuredProjects.title}
            </h2>

            <Divider variant="strong" />

            <p className={styles.projectDescription}>
              {featuredProjects.description}
            </p>
          </div>

          {/* BOARD */}
          <div className={styles.boardLayer}>
            <img src={board} alt="" />

            <div className={styles.projectArea}>
              <div className={styles.projectList}>
                {featuredProjects.projects.map((project) => (
                  <ProjectPaper
                    key={project.id}
                    project={project}
                    onClick={() =>
                      handleProjectClick(project.id)
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* FULL PROJECT DETAIL */}
          {selectedProject && (
            <ProjectDetail
              project={selectedProject}
              onClose={() => setSelectedProjectId(null)}
            />
          )}

        </div>
      </Container>
    </Section>
  );
}

export default FeaturedProjects;