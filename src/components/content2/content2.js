import { Button } from "../button/button";
import { CardContent2 } from "../card-content2/card-content2";
import { HeaderTitle } from "../header-title/header-title";
import styles from "./content2.module.css";
export const Content2 = () => {
  const datas = [
    {
      id: 1,
      img: "/assets/food1.svg",
      title: "Pizza Paperoni",
      category: "Pizza",
      ratings: 4,
      bckColor: "#E6F3F5",
    },
    {
      id: 2,
      img: "/assets/food2.svg",
      title: "Pizza Meat",
      category: "Pizza",
      ratings: 3,
      bckColor: "#E6F3F5",
    },
    {
      id: 3,
      img: "/assets/food3.svg",
      title: "Doner Kebab",
      category: "Kebab",
      ratings: 5,
      bckColor: "#EAEEFA",
    },
    {
      id: 4,
      img: "/assets/food4.svg",
      title: "Salmon Roll",
      category: "Salmon",
      ratings: 4,
      bckColor: "#F9EEF3",
    },
    {
      id: 5,
      img: "/assets/food5.svg",
      title: "Cupcake Choco",
      category: "Cupcake",
      ratings: 4,
      bckColor: "#F0FEEB",
    },
    {
      id: 6,
      img: "/assets/food6.svg",
      title: "Doughnut Milk",
      category: "Doughnut",
      ratings: 5,
      bckColor: "#F3F7D9",
    },
    {
      id: 7,
      img: "/assets/food7.svg",
      title: "Doughnut Unicorn",
      category: "Doughnut",
      ratings: 4,
      bckColor: "#F3F7D9",
    },
    {
      id: 8,
      img: "/assets/food8.svg",
      title: "Kathi Kebab",
      category: "Kebab",
      ratings: 4,
      bckColor: "#EAEEFA",
    },
  ];
  return (
    <div className={styles.content2Wrapper}>
      <HeaderTitle title={"Browse Our Trending"} subTitle={"Receipt"} />
      <div className={styles.cardWrapper}>
        {datas.map((data) => {
          return <CardContent2 key={data.id} data={data} />;
        })}
      </div>
      <div className={styles.buttonWrapper}>
        <Button buttonType={"green"}>ALL Receipt</Button>
      </div>
    </div>
  );
};
