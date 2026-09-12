import skillsBg from "@/assets/images/computer/bg.png";

import { Container, Section } from "@/components/layout";

import Computer from "./Computer/Computer";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <Section as="section" size="lg" className={styles.skills}>

      <div className={styles.computerArea}>
        <img
          src={skillsBg}
          alt=""
          className={styles.background}
        />

        <Container as="div" size="xl">
          <Computer />
        </Container>

        <button
          type="button"
          className={styles.runButton}
        >
          <span className={styles.runLabel}>
            <span>&gt;</span>
            RUN KG-OS
            <span>&lt;</span>
          </span>
        </button>

        <p className={styles.runDescription}>
          KG-OS is a personal project by Kambing Gunung.
        </p>

      </div>
    </Section>
  );
}

export default Skills;