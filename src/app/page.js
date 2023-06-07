import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { Content1 } from "@/components/content1/content1";
import { Content2 } from "@/components/content2/content2";
import { Footer } from "@/components/footer/footer";
import { NavMobile } from "@/components/navigation-mobile/navigation-movile";

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <div className={`${styles["main-container"]}`}>
        <Navbar />
        <Hero />
        <Content1 />
        <Content2 />
        <Footer />
        <NavMobile />
      </div>
    </main>
  );
}
