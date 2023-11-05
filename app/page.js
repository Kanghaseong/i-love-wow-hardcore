import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.titles}>
        <h1>WXW</h1>
      </div>

      <Link href="dash" className={styles.start}>
        시작하기
      </Link>
    </div>
  );
}
