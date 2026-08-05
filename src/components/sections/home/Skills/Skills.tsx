import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import Container from "@/components/layouts/Container";
import Grid from "@/components/layouts/Grid";
import Section from "@/components/layouts/Section";
import Stack from "@/components/layouts/Stack";

import styles from "./Skills.module.css";

const coreCompetencies = [
  "Software Engineering",
  "Backend Development",
  "Mobile Development",
  "Game Development",
];

const technologyGroups = [
  {
    title: "Backend",
    items: ["ASP.NET Core", "C#", "Entity Framework"],
  },
  {
    title: "Frontend",
    items: ["React", "TypeScript"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    title: "Database",
    items: ["MySQL", "SQLite"],
  },
  {
    title: "Game Development",
    items: ["Unity", "Godot"],
  },
];

function Skills() {
  return (
    <Section as="section" size="lg" className={styles.skills}>
      <Container as="div" size="xl">
        <Stack direction="vertical" gap="lg">
          <Stack direction="vertical" gap="sm">
            <p className={styles.kicker}>Skills</p>
            <h2 className={styles.title}>Core competency built for dependable delivery.</h2>
          </Stack>

          <Stack direction="horizontal" gap="md" wrap>
            {coreCompetencies.map((skill) => (
              <Chip key={skill} variant="filled" size="md">
                {skill}
              </Chip>
            ))}
          </Stack>

          <Grid columns={3} gap="md">
            {technologyGroups.map((group) => (
              <Card key={group.title} variant="outline" padding="md">
                <Stack direction="vertical" gap="sm">
                  <h3 className={styles.groupTitle}>{group.title}</h3>
                  <Stack direction="horizontal" gap="sm" wrap>
                    {group.items.map((item) => (
                      <Chip key={item} variant="outline" size="sm">
                        {item}
                      </Chip>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}

export default Skills;
