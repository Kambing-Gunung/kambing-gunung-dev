import { useState } from "react";

import { home } from "@/content/home";

import styles from "./CoreCompetencies.module.css";

function CoreCompetencies() {
  const [expandedCore, setExpandedCore] = useState<string | null>(null);

  const competencies = home.skills.coreCompetencies;

  return (
    <section className={styles.core}>
      <h2 className={styles.title}>CORE</h2>

      <div className={styles.list}>
        {competencies.map((competency) => {
          const isExpanded = expandedCore === competency.name;

          return (
            <div key={competency.name} className={styles.item}>
              <button
                type="button"
                className={styles.button}
                data-expanded={isExpanded}
                onClick={() =>
                  setExpandedCore(
                    isExpanded ? null : competency.name
                  )
                }
              >
                <span className={styles.name}>
                  {competency.name}
                </span>

                <span className={styles.attributes}>
                  {competency.attributes.join(" • ")}
                </span>
              </button>

              {isExpanded && (
                <p className={styles.description}>
                  {competency.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CoreCompetencies;