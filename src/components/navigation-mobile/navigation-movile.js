import Image from "next/image";
import styles from "./navigation-mobile.module.css";

export const NavMobile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navWrapper}>
        <Image src="/assets/menu.svg" width={40} height={40} alt="menu" />
        <p>Home</p>
      </div>
      <div className={styles.navWrapper}>
        <Image src="/assets/menu.svg" width={40} height={40} alt="menu" />
        <p>Promotions</p>
      </div>
      <div className={styles.navWrapper}>
        <Image src="/assets/menu.svg" width={40} height={40} alt="menu" />
        <p>Others</p>
      </div>
    </div>
  );
};
