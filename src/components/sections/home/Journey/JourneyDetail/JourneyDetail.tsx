import detailFrame from "@/assets/images/journey/journey-detail.png";

import Divider from "@/components/ui/Divider";

import type { Journey } from "@/types/journey";

import styles from "./JourneyDetail.module.css";

interface JourneyDetailProps {
  journey: Journey;
}

function JourneyDetail({ journey }: JourneyDetailProps) {
  return (
    <div className={styles.detail}>
      <img
        src={detailFrame}
        alt=""
        className={styles.detailFrame}
        aria-hidden="true"
      />

      <div className={styles.background}/>

      <div className={styles.hoverContent}>
        <h4>{journey.title}</h4>

        <span>{journey.period}</span>

        <Divider variant="default" className={styles.divider}/>

        <p>{journey.description}</p>
      </div>
    </div>
  );
}

export default JourneyDetail;