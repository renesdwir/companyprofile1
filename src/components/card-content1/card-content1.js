import Image from "next/image";
import styles from "./card-content1.module.css";
export const CardContent1 = ({ data }) => {
  const { img, title, total, bckColor } = data;
  const backgroundCard = {
    backgroundColor: bckColor,
  };
  return (
    <div className={styles.cardWrapper} style={backgroundCard}>
      <Image src={img} width={47} height={47} alt={title} />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.subTitle}>{total}</p>
      </div>
    </div>
  );
};
