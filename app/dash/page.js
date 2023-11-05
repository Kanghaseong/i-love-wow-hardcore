import styles from "./page.module.css";
import Table from "../component/Table";
import Logo from "../component/Logo";
import Nav from "../component/Nav";

export default function Page() {
  return (
    <div className={styles.dash}>
      {/* <Nav /> */}
      <Logo />
      <div className={styles.titles}>
        <h3>*캐릭터 정보 갱신은 배틀넷 로그아웃시 적용됩니다.</h3>
        <h3>
          *사망한 유저는 <span className={styles.red_text}>빨간색</span>으로 표시됩니다.
        </h3>
        <h5>*캐릭터가 사망해도 "유령상태"로 존재해야 사망여부가 적용됩니다.</h5>
      </div>
      <Table></Table>
    </div>
  );
}
