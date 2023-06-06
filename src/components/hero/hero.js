import Image from "next/image";
import styles from "./hero.module.css";
import { Button } from "../button/button";
export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.leftWrapper}>
          <h1 className={styles.title}>
            Good Food Us <br />
            Good Mood
          </h1>
          <div className={styles.imageWrapper2}>
            <Image
              src="/assets/Image.svg"
              width={198}
              height={198}
              alt="image hero"
              className={styles.imageHero}
            />
            <div className={styles.subRating2}>
              <Image
                src="/assets/Image.svg"
                width={50}
                height={50}
                alt="image sub hero"
                className={styles.imageSubHero}
              />
              <div>
                <p className={styles.title2}>Green Salad Tomato</p>
                <p className={styles.subTitle2}>Tomato</p>
                <div className={styles.ratingWrapper}>
                  <Image
                    src="/assets/Vector1.svg"
                    width={10}
                    height={10}
                    alt="rating"
                    className={styles.rating}
                  />
                  <Image
                    src="/assets/Vector1.svg"
                    width={10}
                    height={10}
                    alt="rating"
                    className={styles.rating}
                  />
                  <Image
                    src="/assets/Vector1.svg"
                    width={10}
                    height={10}
                    alt="rating"
                    className={styles.rating}
                  />
                  <Image
                    src="/assets/Vector1.svg"
                    width={10}
                    height={10}
                    alt="rating"
                    className={styles.rating}
                  />
                  <Image
                    src="/assets/Vector.svg"
                    width={10}
                    height={10}
                    alt="rating"
                    className={styles.rating}
                  />
                </div>
              </div>
            </div>
          </div>
          <span className={styles.description}>
            I would think that conserving our natural <br /> resources should be
            a conservative position: Not <br />
            to waste food, and not to throw away a lot of the
            <br /> food that we buy.
          </span>
          <div className={styles["button-wrapper"]}>
            <Button buttonType={"green"}>Daftar Sekarang</Button>
            <Button buttonType={"grey"}>About Us</Button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/Image.svg"
            width={412}
            height={412}
            alt="image hero"
            className={styles.imageHero}
          />
          <div className={styles.subRating}>
            <Image
              src="/assets/Image.svg"
              width={50}
              height={50}
              alt="image sub hero"
              className={styles.imageSubHero}
            />
            <div>
              <p className={styles.title2}>Green Salad Tomato</p>
              <p className={styles.subTitle2}>Tomato</p>
              <div className={styles.ratingWrapper}>
                <Image
                  src="/assets/Vector1.svg"
                  width={10}
                  height={10}
                  alt="rating"
                  className={styles.rating}
                />
                <Image
                  src="/assets/Vector1.svg"
                  width={10}
                  height={10}
                  alt="rating"
                  className={styles.rating}
                />
                <Image
                  src="/assets/Vector1.svg"
                  width={10}
                  height={10}
                  alt="rating"
                  className={styles.rating}
                />
                <Image
                  src="/assets/Vector1.svg"
                  width={10}
                  height={10}
                  alt="rating"
                  className={styles.rating}
                />
                <Image
                  src="/assets/Vector.svg"
                  width={10}
                  height={10}
                  alt="rating"
                  className={styles.rating}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
