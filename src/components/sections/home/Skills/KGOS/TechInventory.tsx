import { common } from "@/content/common";

import styles from "./TechInventory.module.css";

const groupLabels: Record<string, string> = {
  languages: "Languages",
  frameworksAndPlatforms: "Frameworks & Platforms",
  librariesAndPackages: "Libraries & Packages",
  databasesAndQuery: "Databases & Query",
  apiAndIntegration: "API & Integration",
  engineering: "Engineering",
  gameAndCreative: "Game & Creative",
  design: "Design",
  testing: "Testing",
  developmentTools: "Development Tools",
  markupAndData: "Markup & Data",
};

function TechInventory() {
  const inventory = common.techInventory;

  return (
    <section className={styles.inventory}>
      <h2 className={styles.title}>TECH INVENTORY</h2>

      <div className={styles.groups}>
        {Object.entries(inventory).map(([key, items]) => (
          <div key={key} className={styles.group}>
            <h3 className={styles.groupTitle}>
              {groupLabels[key] ?? key}
            </h3>

            <div className={styles.items}>
              {items.map((item) => (
                <span key={item} className={styles.item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechInventory;