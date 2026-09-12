import styles from "./KgOsHeader.module.css";

function KgOsHeader() {
  return (
    <header className={styles.header}>
      <span>KG-OS v0.9.1 alpha</span>
      <span>11:42 PM</span>
    </header>
  );
}

export default KgOsHeader;