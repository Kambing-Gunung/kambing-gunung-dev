import towerImage from "@/assets/images/Tower.png";

import styles from "./Tower.module.css";

function Tower() {
  return (
    <div className={styles.tower}>
      <img
        src={towerImage}
        className={styles.asset}
        alt="KG-OS computer tower"
        />
    </div>
  );
}

export default Tower;