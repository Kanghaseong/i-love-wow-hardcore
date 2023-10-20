import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Table from "../component/Table";

export default function Page() {
  return (
    <div className={styles.dash}>
      <img src="/logo.png" alt="logo" />
      <Table></Table>

      <div className={styles.foot}>
        {/*
        <Link href="/">뒤로가기</Link>
        <Link href="/admin">관리자 페이지</Link> */}
      </div>
    </div>
  );
}
