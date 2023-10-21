import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Table from "../component/Table";
import UserInfo from "../component/User_info";

export default function Page() {
  return (
    <div className={styles.dash}>
      <img src="/logo.png" alt="logo" />
      <h3>*사망한 유저는 빨간색으로 표시됩니다.</h3>
      <h3>*데이터는 사용자 캐릭터가 접속 종료할 때 갱신됩니다.</h3>
      <div className={styles.view}>
        <div className={styles.view_node1}>
          <UserInfo></UserInfo>
        </div>
        <div className={styles.view_node2}>
          <Table></Table>
        </div>
        <div className={styles.view_node3}>
          <div className={styles.fake}></div>
        </div>
      </div>
      <div className={styles.foot}>
        {/*
        <Link href="/">뒤로가기</Link>
        <Link href="/admin">관리자 페이지</Link> */}
      </div>
    </div>
  );
}
