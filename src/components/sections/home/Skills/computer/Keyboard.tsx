import keyboardImage from "@/assets/images/Keyboard.png";

import styles from "./Keyboard.module.css";

function Keyboard() {
  return (
    <div className={styles.keyboard}>
      <img
        src={keyboardImage}
        className={styles.asset}
        alt="KG-OS keyboard"
      />
    </div>
  );
}

export default Keyboard;