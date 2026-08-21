import KgOsHeader from "./KgOsHeader";
import PlayerStats from "./PlayerStats";
import SkillsList from "./SkillsList";
import CoreCompetencies from "./CoreCompetencies";
import TechInventory from "./TechInventory";

import styles from "./KgOsScreen.module.css";
import { Divider } from "@/components/ui";

function KgOsScreen() {
  return (
    <div className={styles.screen}>
      <KgOsHeader />

      <div className={styles.content}>
        <PlayerStats />
        <Divider variant="dashed" />
        <SkillsList />
        <Divider variant="dashed" />
        <CoreCompetencies />
        <Divider variant="dashed" />
        <TechInventory />
      </div>
    </div>
  );
}

export default KgOsScreen;