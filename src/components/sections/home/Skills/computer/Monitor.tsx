import monitorImage from "@/assets/images/computer/monitor.png";

import KgOsScreen from "../KGOS/KgOsScreen";

import CrtDistortion from "../CRT/CrtDistortion";
import CrtGlass from "../CRT/CrtGlass";
import CrtNoise from "../CRT/CrtNoise";
import CrtOverlay from "../CRT/CrtOverlay";
import CrtGlow from "../CRT/CrtGlow";

import styles from "./Monitor.module.css";

function Monitor() {
  return (
    <div className={styles.monitor}>
      <img
        src={monitorImage}
        className={styles.asset}
        alt="KG-OS Monitor"
      />

      <div className={styles.screen}>
        <CrtDistortion>
          <KgOsScreen />
        </CrtDistortion>

        <CrtGlow />
        <CrtGlass />
        <CrtNoise />
        <CrtOverlay />
      </div>
    </div>
  );
}

export default Monitor;