import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import { home } from "@/content/home";
import JourneyDetail from "./JourneyDetail/JourneyDetail";

import journeySky from "@/assets/images/journey/journey-sky.png";
import journeyClouds from "@/assets/images/journey/journey-cloud.png";

import styles from "./Journey.module.css";

function Journey() {
  const { journey } = home;

  return (
    <Section as="section" size="lg" className={styles.journey}>
      <Container as="div" size="xl">
        <div className={styles.scene}>

          <div className={styles.skyLayer}>
            <img
              src={journeySky}
              alt=""
              className={styles.sky}
              aria-hidden="true"
            />

            <img
              src={journeyClouds}
              alt=""
              className={styles.clouds}
              aria-hidden="true"
            />
          </div>

          <div className={styles.overlay} aria-hidden="true" />

          <Container as="div" size="xl" className={styles.content}>
            <div className={styles.heading}>
              <p className={styles.kicker}>{journey.kicker}</p>

              <h2 className={styles.title}>
                {journey.title}
              </h2>
            </div>

            <div className={styles.constellation}>
              <svg
                className={styles.path}
                viewBox="0 0 600 200"
                preserveAspectRatio="none"
                role="presentation"
              >
                {/* ORIGIN → REDSTONE BUILDER */}
                <path d="M55 90 L215 40" />

                {/* ORIGIN → THE BEGINNING */}
                <path d="M55 90 L250 145" />

                {/* REDSTONE BUILDER → THE BEGINNING */}
                <path d="M215 40 L250 145" />

                {/* THE BEGINNING → FIRST DISCOVERY */}
                <path d="M250 145 L330 100" />

                {/* THE CHOSEN PATH → GOING DEEPER */}
                <path d="M355 25 L485 45" />

                {/* GOING DEEPER → HERE */}
                <path d="M485 45 L545 125" />
              </svg>

              <div className={styles.nodes}>
                {journey.milestones.map((milestone, index) => (
                  <article
                    key={milestone.id}
                    className={styles.milestones}
                  >
                    <span className={styles.star} aria-hidden="true">
                      {index === 0 ||
                        index === journey.milestones.length - 1
                        ? "★"
                        : "✦"}
                    </span>

                    <div className={styles.milestoneContent}>
                      <p className={styles.period}>
                        {milestone.period}
                      </p>

                      <h3 className={styles.milestoneTitle}>
                        {milestone.title}
                      </h3>
                    </div>

                    <div className={styles.detailWrapper}>
                      <JourneyDetail journey={milestone} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </Section>
  );
}

export default Journey;