import mouseImage from "@/assets/images/computer/mouse.png";

import styles from "./Mouse.module.css";

function Mouse() {
  return (
    <div className={styles.mouse}>
      <img
        src={mouseImage}
        className={styles.asset}
        alt="KG-OS mouse"
      />
    </div>
  );
}

export default Mouse;