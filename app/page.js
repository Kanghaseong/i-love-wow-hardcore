import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.titles}>
        <h1>Why is World of Warcraft Classic Hardcore fun?</h1>
        <h3>월드 오브 워크래프트 클래식 하드코어는 왜 재밌을까?</h3>
        <h5>ワールド·オブ·ワーク·ラフトクラシックハードコアはなぜ面白いのですか？</h5>
      </div>

      <Link href="dash" className={styles.start}>
        시작하기
      </Link>
    </div>
  );
}
