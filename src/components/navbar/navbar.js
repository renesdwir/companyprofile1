import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { Button } from "../button/button";

export const Navbar = () => {
  return (
    <div className={styles["navbar-container"]}>
      <Image
        src="/assets/logo.svg"
        width={207}
        height={50}
        alt="ElemesID Logo"
        className={styles.logo}
      />
      <div className={styles["nav-wrapper"]}>
        <Link href="/" className={styles["nav-link"]}>
          Home
        </Link>
        <Link href="/" className={styles["nav-link"]}>
          About
        </Link>
        <Link href="/" className={`${styles["nav-link"]} ${styles["nav-hot"]}`}>
          Promotions
        </Link>
        <Link href="/" className={styles["nav-link"]}>
          Blogs
        </Link>
        <Link href="/" className={styles["nav-link"]}>
          Contact Us
        </Link>
      </div>
      <div className={styles["button-wrapper"]}>
        <Button buttonType={"none"} hide={true}>
          Masuk
        </Button>
        <Button buttonType={"green"}>Daftar Sekarang</Button>
      </div>
    </div>
  );
};
