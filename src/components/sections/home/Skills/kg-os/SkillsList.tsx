import { useState } from "react";

import { home } from "@/content/home";

import SkillDetail from "./SkillDetail";
import styles from "./SkillsList.module.css";

function SkillsList() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = home.skills.playerSkills;

  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>SKILLS</h2>

      <div className={styles.list}>
        {Object.entries(skills).map(([key, skill]) => {
          const isSelected = selectedSkill === key;

          return (
            <div key={key} className={styles.item}>
              <button
                type="button"
                className={styles.skill}
                data-selected={isSelected}
                onClick={() =>
                  setSelectedSkill(isSelected ? null : key)
                }
              >
                [ {skill.name} ]
              </button>

              {isSelected && <SkillDetail skill={skill} />}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsList;