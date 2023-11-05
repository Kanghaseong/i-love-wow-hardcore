"use client";

import styles from "./logo.module.css";

export default function ReloadButton() {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <h1 className={styles.logo}>
      <span onClick={reloadPage}>WXW</span>
    </h1>
  );
}
