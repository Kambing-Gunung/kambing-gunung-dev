import Monitor from "./Monitor";
import Tower from "./Tower";
import Keyboard from "./Keyboard";
import Mouse from "./Mouse";

import styles from "./Computer.module.css";

function Computer() {
  return (
    <div className={styles.computer}>
      <div className={styles.top}>
        <Monitor />
        <Tower />
      </div>

      <div className={styles.bottom}>
        <Keyboard />
        <Mouse />
      </div>
    </div>
  );
}

export default Computer;