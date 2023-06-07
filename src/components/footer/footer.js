import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
import { Button } from "../button/button";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerWrapper2}>
          <Image
            src="/assets/logo.svg"
            width={207}
            height={50}
            alt="ElemesID Logo"
            className={styles.logo}
          />
          <p className={styles.sub}>
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
            <br /> Kecamatan Setiabudi, Kota Jakarta Selatan,
            <br /> Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className={styles.iconsWrapper}>
            <div className={styles.icons}>
              <Image
                src="/assets/icons1.svg"
                width={15}
                height={15}
                alt="icons"
                className={styles.icons2}
              />
            </div>
            <div className={styles.icons}>
              <Image
                src="/assets/icons2.svg"
                width={15}
                height={15}
                alt="icons"
              />
            </div>
            <div className={styles.icons}>
              <Image
                src="/assets/icons3.svg"
                width={15}
                height={15}
                alt="icons"
              />
            </div>
          </div>
        </div>
        <div className={styles.footerWrapper2}>
          <h5 className={styles.titleLink}>Categories</h5>
          <div className={styles.linksWrapper}>
            <Link href={"/"}>Cupcake</Link>
            <Link href={"/"}>Pizza</Link>
            <Link href={"/"}>Kebab</Link>
            <Link href={"/"}>Salmon</Link>
            <Link href={"/"}>Dougnut</Link>
          </div>
        </div>
        <div className={styles.footerWrapper2}>
          <h5 className={styles.titleLink}>About Us</h5>
          <div className={styles.linksWrapper}>
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>FAQ</Link>
            <Link href={"/"}>Report Problem</Link>
          </div>
        </div>
        <div className={styles.footerWrapper2}>
          <h5 className={styles.titleLink}>Newsletter</h5>
          <div className={styles.newsletter}>
            <p className={styles.sub}>
              Get now free 50% discount for all <br /> products on your first
              order
            </p>
            <div className={styles.inputWrapper}>
              <input type="text" className={styles.inputCustom} />
              <Button buttonType={"green"} squareLeft>
                SEND
              </Button>
            </div>
            <div className={styles.mailWrapper}>
              <div className={styles.mail}>
                <Image
                  src="/assets/icons1.svg"
                  width={15}
                  height={15}
                  alt="icons"
                  className={styles.icons2}
                />
                <p>elemesid@gmail.com</p>
              </div>
              <div className={styles.mail}>
                <Image
                  src="/assets/icons2.svg"
                  width={15}
                  height={15}
                  alt="icons"
                  className={styles.icons2}
                />
                <p>0888 1111 2222</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2021 Elemes id. All rights reserved
      </div>
    </div>
  );
};
