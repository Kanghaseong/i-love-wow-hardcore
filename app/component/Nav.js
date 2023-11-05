import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link
        href={`https://oauth.battle.net/authorize?region=kr&response_type=code&client_id=${process.env.NEXT_PUBLIC_BATTLE_NET_CLIENT_ID}&redirect_uri=http://localhost:4000/auth/redirect&scope=wow.profile openid&state=test`}
      >
        <div className={styles.login}>로그인</div>
      </Link>
    </nav>
  );
}
