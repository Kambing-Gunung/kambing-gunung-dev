import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import Container from "@/components/layouts/Container";
import Grid from "@/components/layouts/Grid";
import Section from "@/components/layouts/Section";
import Stack from "@/components/layouts/Stack";

import styles from "./FeaturedProjects.module.css";

const featuredProjects = [
  {
    title: "Kambing Gunung Platform",
    description: "A strong personal platform focused on engineering clarity, content structure, and brand cohesion.",
    tags: ["React", "TypeScript", "Vite"],
  },
  {
    title: "Game Development Practice",
    description: "A hands-on portfolio of game ideas and interactive prototypes built with a product-first mindset.",
    tags: ["Unity", "Godot", "C#"],
  },
  {
    title: "Platform Systems",
    description: "Backend and product foundations designed to support stable processing, maintainability, and growth.",
    tags: ["ASP.NET Core", "SQLite", "EF Core"],
  },
];

function FeaturedProjects() {
  return (
    <Section as="section" size="lg" className={styles.featuredProjects}>
      <Container as="div" size="xl">
        <Stack direction="vertical" gap="lg">
          <Stack direction="vertical" gap="sm">
            <p className={styles.kicker}>Featured Projects</p>
            <h2 className={styles.title}>Work that demonstrates craft and intent.</h2>
          </Stack>

          <Grid columns={3} gap="md">
            {featuredProjects.map((project) => (
              <Card key={project.title} variant="interactive" padding="lg" className={styles.projectCard}>
                <Stack direction="vertical" gap="md">
                  <Stack direction="vertical" gap="sm">
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                  </Stack>
                  <Stack direction="horizontal" gap="sm" wrap>
                    {project.tags.map((tag) => (
                      <Chip key={tag} variant="outline" size="sm">
                        {tag}
                      </Chip>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            ))}
          </Grid>

          <Button variant="secondary" size="md">
            View All Projects
          </Button>
        </Stack>
      </Container>
    </Section>
  );
}

export default FeaturedProjects;
