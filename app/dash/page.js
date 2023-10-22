import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Table from "../component/Table";

export default function Page() {
  return (
    <div className={styles.dash}>
      <img src="/logo.png" alt="logo" />
      <h3>*캐릭터 정보 갱신은 배틀넷 로그아웃시 적용됩니다.</h3>
      <h3>
        *사망한 유저는 <span className={styles.red_text}>빨간색</span>으로 표시됩니다.
      </h3>
      <h5>*캐릭터가 사망해도 "유령상태"로 존재해야 사망여부가 적용됩니다.</h5>

      <Table></Table>

      <div className={styles.foot}>
        {/*
        <Link href="/">뒤로가기</Link>
        <Link href="/admin">관리자 페이지</Link> */}
      </div>
    </div>
  );
}
