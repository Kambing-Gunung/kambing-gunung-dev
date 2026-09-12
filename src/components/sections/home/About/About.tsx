import { Container, Section } from "@/components/layout";

import Button from "@/components/ui/Button";

import { common } from "@/content/common";
import { home } from "@/content/home";

import aboutIllustration from "@/assets/images/hero/ilust2.png";

import styles from "./About.module.css";
import Divider from "@/components/ui/Divider";


function About() {
  const { about } = home;

  return (
    <Section as="section" size="lg" className={styles.about}>
      <Container size="xl">
        <div className={styles.content}>
          <div>

            <div className={styles.visual}>
              <img
                src={aboutIllustration}
                alt="About Ilustration"
                className={styles.visualImage}
              />
            </div>

            <div>
              <div className={styles.ctaActions}>

                <Button variant="primary">
                  {about.cta.portfolio}
                </Button>

                <Button variant="outline">
                  {about.cta.ats}
                </Button>

              </div>
            </div>
          </div>

          <div className={styles.information}>
            <div className={styles.kickerContainer}>
              <p className={styles.kicker1}>{about.kicker1}</p>
              <p className={styles.kicker2}>{about.kicker2}</p>

              <Divider className={styles.divider1} variant="strong" />
            </div>

            <p className={styles.greeting}>
              {about.greeting} {common.developer.nickname}.
            </p>

            {about.description.map((paragraph) => (
              <p key={paragraph} className={styles.description}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.footer}>

          <Divider className={styles.divider2} variant="default" />

          <p className={styles.philosophy}>
            "{about.philosophy}"
          </p>

          <p className={styles.ctaTitle}>
            {about.cta.title}
          </p>
        </div>
      </Container>
    </Section>
  );
}

export default About;
