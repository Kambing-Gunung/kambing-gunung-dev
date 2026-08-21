import monitorImage from "@/assets/images/Monitor.png";

import KgOsScreen from "../kg-os/KgOsScreen";

import CrtDistortion from "../crt/CrtDistortion";
import CrtGlass from "../crt/CrtGlass";
import CrtNoise from "../crt/CrtNoise";
import CrtOverlay from "../crt/CrtOverlay";
import CrtGlow from "../crt/CrtGlow";

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