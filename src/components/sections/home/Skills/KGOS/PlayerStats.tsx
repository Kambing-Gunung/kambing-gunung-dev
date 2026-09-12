import { useState } from "react";

import { home } from "@/content/home";

import styles from "./PlayerStats.module.css";

function PlayerStats() {
  const { stats } = home.skills;

  const [expandedStat, setExpandedStat] = useState<string | null>(null);

  return (
    <section className={styles.stats}>
      <h2 className={styles.title}>PLAYER STATS</h2>

      <div className={styles.list}>
        {Object.entries(stats).map(([key, stat]) => {
          const isExpanded = expandedStat === key;

          return (
            <div key={key} className={styles.item}>
              <button
                type="button"
                className={`${styles.statButton} ${
                  isExpanded ? styles.expanded : ""
                }`}
                onClick={() =>
                  setExpandedStat(isExpanded ? null : key)
                }
              >
                <span className={styles.short}>{stat.short}</span>

                <span className={styles.name}>{stat.name}</span>

                <span className={styles.value}>{stat.value}</span>

                <span className={styles.arrow}>
                  {isExpanded ? "−" : "+"}
                </span>
              </button>

              {isExpanded && (
                <p className={styles.description}>
                  {stat.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PlayerStats;