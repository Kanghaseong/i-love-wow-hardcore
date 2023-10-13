import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.titles}>
        <h1>I Love World of Warcraft Classic HardCore.</h1>
        <h3>나는 월드 오브 워크래프트 클래식 하드코어를 사랑합니다.</h3>
        <h5>
          私はワールド オブ ワーク ラフト クラシック ハードコアが大好きです。
        </h5>
      </div>
      <Link href="dash">시작하기</Link>
    </div>
  );
}
