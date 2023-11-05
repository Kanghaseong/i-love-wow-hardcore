"use client";

import styles from "./refresh_wrapper.module.css";

export default function Refresh_wrapper({ children }) {
  const reload_page = () => {
    location.reload();
  };
  return (
    <span className={styles.span} onClick={reload_page}>
      {children}
    </span>
  );
}
