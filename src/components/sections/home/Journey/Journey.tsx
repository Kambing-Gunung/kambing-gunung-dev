import Card from "@/components/ui/Card";
import Container from "@/components/layouts/Container";
import Grid from "@/components/layouts/Grid";
import Section from "@/components/layouts/Section";
import Stack from "@/components/layouts/Stack";

import styles from "./Journey.module.css";

const journeyMilestones = [
  {
    title: "Foundation",
    description: "Exploring systems, patterns, and the discipline needed to turn ideas into maintainable software.",
  },
  {
    title: "Execution",
    description: "Shaping a product-oriented approach that balances technical craft with clear problem solving.",
  },
  {
    title: "Growth",
    description: "Continuing to build a meaningful engineering voice through projects, platforms, and constant iteration.",
  },
];

function Journey() {
  return (
    <Section as="section" size="lg" className={styles.journey}>
      <Container as="div" size="xl">
        <Stack direction="vertical" gap="lg">
          <Stack direction="vertical" gap="sm">
            <p className={styles.kicker}>Journey</p>
            <h2 className={styles.title}>A path shaped by iteration, learning, and intent.</h2>
          </Stack>

          <Grid columns={3} gap="md">
            {journeyMilestones.map((milestone) => (
              <Card key={milestone.title} variant="elevated" padding="md">
                <Stack direction="vertical" gap="sm">
                  <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
                  <p className={styles.milestoneDescription}>{milestone.description}</p>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  );
}

export default Journey;
