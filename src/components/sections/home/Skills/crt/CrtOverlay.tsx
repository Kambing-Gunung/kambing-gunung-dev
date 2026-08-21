import styles from "./CrtOverlay.module.css";

function CrtOverlay() {
  return <div className={styles.overlay} aria-hidden="true" />;
}

export default CrtOverlay;