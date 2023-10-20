import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Table from "../component/Table";

export default function Page() {
  return (
    <div className={styles.dash}>
      <img src="/logo.png" alt="logo" />
      <h3>*사망한 유저는 빨간색으로 표시됩니다.</h3>
      <h3>*블리자드 API를 사용하기 때문에 정확한 마지막 접속 기준을 파악하지 못하고 있습니다.</h3>
      <Table></Table>

      <div className={styles.foot}>
        {/*
        <Link href="/">뒤로가기</Link>
        <Link href="/admin">관리자 페이지</Link> */}
      </div>
    </div>
  );
}
