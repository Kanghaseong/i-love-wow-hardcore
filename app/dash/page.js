import styles from "./page.module.css";
import Table from "../component/Table";
import Logo from "../component/Logo";
import Nav from "../component/Nav";

export default function Page() {
  return (
    <div className={styles.dash}>
      <section className={styles.section1}>
        <div className={styles.none}>none</div>
        <nav className={styles.nav_head}>
          <h1>
            <span>WXW</span>
          </h1>
          <li>
            <span class="material-symbols-outlined">sort</span>Dashboard
          </li>
          <li>
            <span class="material-symbols-outlined">refresh</span>Refresh
          </li>
        </nav>
      </section>
      <section className={styles.section2}>섹션 2</section>
      <section className={styles.section3}>
        <div>디브</div>
        <div className={styles.none}>none</div>
      </section>
      {/* <Nav /> */}
      {/* <Table></Table> */}
    </div>
  );
}
