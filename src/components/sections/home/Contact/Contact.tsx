import Button from "@/components/ui/Button";
import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import Stack from "@/components/layouts/Stack";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <Section as="section" size="lg" className={styles.contact}>
      <Container as="div" size="xl">
        <Stack direction="vertical" gap="md">
          <p className={styles.kicker}>Contact</p>
          <h2 className={styles.title}>Let’s build the next meaningful product together.</h2>
          <p className={styles.description}>
            If you are looking for a developer who values clarity, systems, and thoughtful execution,
            start the conversation.
          </p>
          <Stack direction="horizontal" gap="md" wrap>
            <Button variant="primary" size="md">
              Reach Out
            </Button>
            <Button variant="outline" size="md">
              View Resume
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}

export default Contact;
