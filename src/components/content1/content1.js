import Image from "next/image";
import { Button } from "../button/button";
import { CardContent1 } from "../card-content1/card-content1";
import { HeaderTitle } from "../header-title/header-title";
import styles from "./content1.module.css";

export const Content1 = () => {
  const datas = [
    {
      id: 1,
      img: "/assets/icon1.svg",
      title: "Cupcake",
      total: "22 Items",
      bckColor: "#F0FEEB",
    },
    {
      id: 2,
      img: "/assets/pizza.svg",
      title: "Pizza",
      total: "25 Items",
      bckColor: "#F0FEEB",
    },
    {
      id: 3,
      img: "/assets/kebab.svg",
      title: "Kebab",
      total: "12 Items",
      bckColor: "#EAEEFA",
    },
    {
      id: 4,
      img: "/assets/salmon.svg",
      title: "Salmon",
      total: "22 Items",
      bckColor: "#F9EEF3",
    },
    {
      id: 5,
      img: "/assets/doughnut.svg",
      title: "Doughnut",
      total: "11 Items",
      bckColor: "#F3F7D9",
    },
  ];
  return (
    <div className={styles.content1Wrapper}>
      <HeaderTitle title={"Browse Our Category"} subTitle={"Receipt"} />
      <div className={styles.cardWrapper}>
        {datas.map((data) => {
          return <CardContent1 key={data.id} data={data} />;
        })}
      </div>
      <div className={styles["button-wrapper"]}>
        <Button buttonType={"green"} hide={true}>
          <div className={styles.iconWrapper}>
            NEXT
            <div className={styles.icon}>
              <Image
                src="/assets/right.svg"
                width={10}
                height={10}
                alt="lefticon"
              />
            </div>
          </div>
        </Button>
        <Button buttonType={"green"} hide={true}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}>
              <Image
                src="/assets/left.svg"
                width={10}
                height={10}
                alt="lefticon"
              />
            </div>
            PREV
          </div>
        </Button>
      </div>
    </div>
  );
};
