import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/layouts/Container";
import Grid from "@/components/layouts/Grid";
import Section from "@/components/layouts/Section";
import Stack from "@/components/layouts/Stack";

import styles from "./About.module.css";

function About() {
  return (
    <Section as="section" size="lg" className={styles.about}>
      <Container as="div" size="xl">
        <Grid columns={2} gap="lg">
          <Stack direction="vertical" gap="md" justify="center">
            <p className={styles.kicker}>WHO’S BEHIND THIS?</p>
            <h2 className={styles.title}>Hi, I’m David Wahyu Herdyansyah.</h2>
            <p className={styles.description}>
              I’m the software engineer behind Kambing Gunung — building digital products that solve real
              problems and create meaningful experiences.
            </p>
            <p className={styles.description}>
              From mobile apps to backend systems, I care about clean engineering, thoughtful delivery, and
              product work that people can feel.
            </p>
            <Stack direction="horizontal" gap="md" wrap>
              <Button variant="primary" size="md">
                View Projects
              </Button>
              <Button variant="outline" size="md">
                Download Resume
              </Button>
            </Stack>
          </Stack>

          <Card variant="elevated" padding="lg" className={styles.illustrationCard}>
            <div className={styles.illustration}>
              <span className={styles.illustrationMark} />
            </div>
          </Card>
        </Grid>

        <Grid columns={2} gap="md" className={styles.summaryGrid}>
          <Card variant="interactive" padding="lg" className={styles.summaryCard}>
            <p className={styles.summaryTitle}>Problem Solver</p>
            <p className={styles.summaryDescription}>I enjoy solving complex problems with clean, efficient code.</p>
          </Card>
          <Card variant="interactive" padding="lg" className={styles.summaryCard}>
            <p className={styles.summaryTitle}>Builder</p>
            <p className={styles.summaryDescription}>I love turning ideas into products that people can use and trust.</p>
          </Card>
          <Card variant="interactive" padding="lg" className={styles.summaryCard}>
            <p className={styles.summaryTitle}>Lifelong Learner</p>
            <p className={styles.summaryDescription}>I’m always curious and continuously learning new ways to create impact.</p>
          </Card>
          <Card variant="interactive" padding="lg" className={styles.summaryCard}>
            <p className={styles.summaryTitle}>Impact Driven</p>
            <p className={styles.summaryDescription}>I build with purpose, focus, and a clear sense of meaning.</p>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}

export default About;
