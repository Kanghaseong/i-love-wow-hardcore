import styles from "./user_card.module.css";
import Image from "next/image";

export default function User_card({ user, index }) {
  // Construct the image path based on user.user_class
  const imagePath = `/classicon_${user.user_class}.jpg`;

  return (
    <div className={styles.user_card}>
      <section className={styles.rank}>
        <div>{index + 1}</div>
      </section>
      <section>
        <div>
          {/* Display the class-specific image */}
          <Image className={styles.face} src={imagePath} alt={user.user_class} width={30} height={30} />
        </div>
        <div className={styles.nose}>
          <div>{user.level}</div>
          <div className={user.is_ghost ? styles.dead : styles.undead}>{user.name}</div>
        </div>
      </section>
      <section className={styles.info}>
        <div>
          <span>
            {user.gender == "남성" ? (
              <span class="material-symbols-outlined">male</span>
            ) : (
              <span class="material-symbols-outlined">female</span>
            )}
          </span>
        </div>
        <div>
          <span>{user.race}</span>
        </div>

        <div>
          <span>
            {new Date(user.last_login_timestamp).toLocaleString("ko-KR", {
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </section>
      <section>
        <span>{user.guild}</span>
      </section>
    </div>
  );
}
