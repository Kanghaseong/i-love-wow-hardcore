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
      <section className={styles.face}>
        <div>
          {/* Display the class-specific image */}
          <Image src={imagePath} alt={user.user_class} width={26} height={26} />
        </div>
        <div className={styles.nose}>
          <div>{user.level}</div>
          <div className={user.is_ghost ? styles.dead : styles.undead}>{user.name}</div>
        </div>
      </section>
      <section>
        <div>
          <span>성별:</span>
          <span>
            {user.gender == "남성" ? (
              <span class="material-symbols-outlined">male</span>
            ) : (
              <span class="material-symbols-outlined">female</span>
            )}
          </span>
        </div>
        <div>
          <span>종족: </span>
          <span>{user.race}</span>
        </div>
      </section>
      <section>
        <span>왁타버스</span>
      </section>
    </div>
  );
}
