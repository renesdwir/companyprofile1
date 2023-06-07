import Image from "next/image";
import styles from "./card-content2.module.css";
import { Rating } from "../rating/rating";

export const CardContent2 = ({ data }) => {
  const { id, img, title, category, ratings, bckColor } = data;
  const backgroundCard = {
    backgroundColor: bckColor,
  };
  return (
    <div className={styles.cardWrapper} style={backgroundCard}>
      <Image src={img} width={120} height={120} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.category}>{category}</p>
      <div>
        <Rating total={ratings} />
      </div>
    </div>
  );
};
