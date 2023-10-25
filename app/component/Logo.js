"use client";

import styles from "./logo.module.css";

export default function ReloadButton() {
  const reloadPage = () => {
    location.reload();
  };

  return <img className={styles.logo} onClick={reloadPage} src="/logo.png" alt="logo" />;
}
