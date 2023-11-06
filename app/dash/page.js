import styles from "./page.module.css";
import Refresh_wrapper from "../component/Refresh_wrapper";
import Main_section from "../component/Main_section";
export default function Page() {
  return (
    <div className={styles.dash}>
      <header className={styles.header}>
        <section className={styles.section1}>
          <div className={styles.none}></div>
          <nav className={styles.nav_head}>
            <Refresh_wrapper>
              <h1>
                <span>WXW</span>
              </h1>
            </Refresh_wrapper>
            <li>
              <span class="material-symbols-outlined">sort</span>Dashboard
            </li>
            <Refresh_wrapper>
              <li>
                <span class="material-symbols-outlined">refresh</span>Refresh
              </li>
            </Refresh_wrapper>
            {/* <li>
            <Link
              href={`https://oauth.battle.net/authorize?region=kr&response_type=code&client_id=${process.env.NEXT_PUBLIC_BATTLE_NET_CLIENT_ID}&redirect_uri=http://localhost:4000/auth/redirect&scope=wow.profile openid&state=test`}
            >
              <span class="material-symbols-outlined">login</span>Login
            </Link>
          </li> */}
          </nav>
        </section>
      </header>
      <main className={styles.main}>
        <section className={styles.section2}>
          {/* <div className={styles.mouth}>Dashboard</div> */}

          <Main_section></Main_section>
        </section>
        <section className={styles.section3}>
          <div> </div>
          <div className={styles.none}></div>
        </section>
        {/* <Nav /> */}
        {/* <Table></Table> */}
      </main>
    </div>
  );
}
