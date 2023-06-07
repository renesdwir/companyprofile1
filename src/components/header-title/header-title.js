import styles from "./header-title.module.css";
export const HeaderTitle = ({ title, subTitle }) => {
  return (
    <div className={styles.headerWrapper}>
      <h2 className={styles.title}>{title}</h2>
      <h2 className={styles.subTitle}>{subTitle}</h2>
    </div>
  );
};
